<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blockchain Evidence Management System</title>
</head>
<body>
  <h1>Blockchain Evidence Management System</h1>
  <p>A decentralized application that securely stores evidence records on a blockchain. This application enables users to add new records, search for existing records by UID, and view all records in the blockchain. Built with Flask for the backend, it leverages blockchain technology to ensure data integrity and security.</p>

  <h2>🌐 Live Demo</h2>
  <p align="center">
    <a href="https://blockchain-evidence-system.glitch.me" target="_blank" style="display: inline-block; padding: 10px 20px; margin: 5px; border-radius: 5px; background-color: purple; color: white; text-decoration: none;">Run on Glitch</a>
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li><strong>Add Evidence Record</strong>: Users can add new evidence records, including name, age, UID, and evidence details.</li>
    <li><strong>Search Evidence</strong>: Quickly search for records by UID.</li>
    <li><strong>Blockchain Technology</strong>: Each record is stored as a block with a unique hash and previous hash, ensuring immutability and security.</li>
    <li><strong>User-Friendly Interface</strong>: Interactive UI with a dark theme for a professional look and feel.</li>
  </ul>

  <h2>🛠️ Getting Started</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li><strong>Python 3.x</strong>: Make sure Python 3.x is installed on your system.</li>
    <li><strong>Flask</strong>: Install Flask by running:</li>
  </ul>
  <pre><code>pip install flask</code></pre>

  <h3>Installation</h3>
  <ol>
    <li><strong>Clone the repository</strong>:
      <pre><code>git clone https://github.com/yourusername/blockchain-evidence-system.git
cd blockchain-evidence-system</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>:
      <pre><code>pip install -r requirements.txt</code></pre>
    </li>
    <li><strong>Run the Application</strong>:
      <pre><code>python app.py</code></pre>
    </li>
    <li><strong>Access the Application</strong>: Open your browser and go to <code>http://127.0.0.1:5000</code>.</li>
  </ol>

  <h2>⚙️ Technologies Used</h2>
  <ul>
    <li><strong>Backend</strong>: Flask (Python)</li>
    <li><strong>Frontend</strong>: HTML, CSS (Dark theme styling)</li>
    <li><strong>Blockchain</strong>: Custom implementation using Python and SHA-256 hashing</li>
  </ul>

  <h2>📜 License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>
</html>
