from flask import Flask, render_template, request, redirect, url_for
from hashlib import sha256
from datetime import datetime

app = Flask(__name__)

# List to store blockchain
blockchain = []

# Patient record class
class PatientRecord:
    def __init__(self, name, uid, age, evidence):
        self.timestamp = datetime.now()
        self.name = name
        self.uid = uid
        self.age = age
        self.evidence = evidence
        self.previous_hash = self.calculate_previous_hash()
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        hash_data = (str(self.timestamp) + self.name + str(self.uid) + str(self.age) + self.evidence).encode()
        return sha256(hash_data).hexdigest()

    def calculate_previous_hash(self):
        if len(blockchain) > 0:
            previous_record = blockchain[-1]
            return previous_record.hash
        return None

# Route to add new record to blockchain
@app.route('/add_record', methods=['POST'])
def add_record():
    name = request.form['name']
    age = request.form['age']
    evidence = request.form['evidence']
    uid = request.form['uid']

    new_record = PatientRecord(name, uid, age, evidence)
    blockchain.append(new_record)

    return redirect(url_for('view_blockchain'))

# Route to delete a record by UID
@app.route('/delete_record/<uid>', methods=['POST'])
def delete_record(uid):
    global blockchain
    blockchain = [record for record in blockchain if record.uid != uid]
    return redirect(url_for('view_blockchain'))

# Route to view blockchain
@app.route('/view_blockchain')
def view_blockchain():
    return render_template('view_blockchain.html', blockchain=blockchain)

# Route to add a new record form
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
