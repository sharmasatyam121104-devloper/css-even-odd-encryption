# CSS Even-Odd Encryption 🔐

This repository contains a simple encryption and decryption program implemented using the **Even–Odd Position Method**.  
It is created as **Practical-1** for the subject **Cryptography and System Security (CSS)**.

The program is written in **Node.js (JavaScript)** and helps in understanding the basic concept of cryptography.

---

## 📌 Objective

To implement a basic encryption and decryption technique by separating characters at even and odd positions of a message.

---

## 🧠 Concept Used

- Characters at **even indexes** are stored separately
- Characters at **odd indexes** are stored separately
- Both parts are combined to form encrypted text
- During decryption, the text is split and merged alternately

> ⚠️ This is not a secure encryption method. It is used only for learning purposes.

---

## ⚙️ Algorithm

### Encryption
1. Take input message from user
2. Remove all spaces from the message
3. Store even index characters in one string
4. Store odd index characters in another string
5. Concatenate both strings to get encrypted text

### Decryption
1. Take encrypted text
2. Convert it to lowercase
3. Divide the text into two halves
4. Merge characters alternately from both halves
5. Get the original message

---

## 💻 Technology Used

- Node.js
- JavaScript
- Readline module

---

## ▶️ How to Run the Program

1. Clone the repository:
   ```bash
   https://github.com/sharmasatyam121104-devloper/css-even-odd-encryption

 Go to project folder:

cd css-even-odd-encryption


Run the program:

node index.js

🧪 Sample Input / Output

Input:

hello world


Output:

Encrypted text: hloolelwrd
Decrypted text: helloworld

🎓 Academic Use

Subject: Cryptography and System Security (CSS)

Practical No: 1

Purpose: Learning basic encryption logic

📜 Conclusion

This practical demonstrates a simple encryption and decryption technique using even and odd character positions.
It helps students understand the fundamentals of cryptography in an easy way.

👤 Author

Satyam Sharma
B.Tech Student


---

## 📂 Folder Structure (recommended)



css-even-odd-encryption/
│
├── index.js
├── README.md


---

## 🚀 Git Commands (quick help)

```bash
git init
git add .
git commit -m "CSS Practical 1: Even-Odd Encryption using Node.js"
git branch -M main
git remote add origin https://github.com/USERNAME/css-even-odd-encryption.git
git push -u origin main
