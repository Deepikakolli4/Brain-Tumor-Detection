
# Brain Tumor Detection System
An **AI-powered web application** that detects and classifies brain tumors from MRI scans using deep learning. Supports **4 tumor types**: Glioma, Meningioma, Pituitary, and Normal (no tumor).

![Brain Tumor Detection](https://img.shields.io/badge/Project-Brain%20Tumor%20Detection-blue)

![Frontend](https://img.shields.io/badge/Frontend-React-green)

![Backend](https://img.shields.io/badge/Backend-Flask-orange)

![Model](https://img.shields.io/badge/Model-ResNet18%20%7C%20CNN-yellow)

---

## Features

* **Real-time MRI image upload & prediction**
* **Interactive image preview**
* **Detailed disease information with symptoms**
* **Multi-class classification (4 types)**
* **Responsive React frontend**
* **Secure Flask API backend with CORS**
* **Pretrained ResNet18 model (PyTorch)**

---

## Tech Stack

| Layer      | Technology                           |
| ---------- | ------------------------------------ |
| Frontend   | React.js, Axios, React Router        |
| Backend    | Flask (Python), PyTorch, TorchVision |
| Model      | ResNet18 (fine-tuned)                |
| Deployment | Local (scalable to Docker/Cloud)     |

---

## Project Structure

```
brain-tumor-detection/
│
├── backend/
│   ├── app.py                    # Flask API server
│   ├── brain_tumor_model.pth     # Trained model (excluded via .gitignore)
│   └── temp_image.jpg            # Temp upload (auto-cleaned)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/           # Button, FileInput
│   │   ├── pages/                # Home, About
│   │   ├── services/api.js       # API base URL
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
├── README.md
└── (optional) docker-compose.yml
```

---

## Prerequisites

* **Python 3.8+**
* **Node.js 16+** and **npm**
* **Git**

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/brain-tumor-detection.git
cd brain-tumor-detection
```

### 2. Backend Setup (Flask + PyTorch)

#### Create virtual environment

```bash
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
```

#### Install dependencies

```bash
pip install flask flask-cors torch torchvision pillow opencv-python numpy
```

#### Place your trained model

Copy **brain_tumor_model.pth** into `/backend/`

#### Note

The model file is not included in the repository (too large). Train it using the notebook or download it from your source.

---

### 3. Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

The app will run at: **[http://localhost:3000](http://localhost:3000)**

---

### 4. Start Backend Server

In a new terminal:

```bash
cd backend
python app.py
```

Backend runs on: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

---

## Usage

1. Open the app at **[http://localhost:3000](http://localhost:3000)**
2. Upload a brain MRI image (JPG/PNG)
3. Click **Submit**
4. View:

   * Prediction result
   * Disease description & symptoms

---

## Model Details

Model: **Fine-tuned ResNet18 (PyTorch)**
Input: **224×224 RGB (grayscale → 3-channel)**
Classes: **Glioma, Meningioma, Pituitary, Normal**

---

## API Endpoint

**POST /predict**
**Content-Type:** multipart/form-data

**Form Data:**

```
file: <image_file>
```

**Response:**

```json
{
  "predicted_class": "Glioma"
}
```

---

## Training the Model (Optional)

Use the provided notebooks:

* **main.ipynb** → Multi-class (4 types) with ResNet18
* **Brain Tumor Detection.ipynb** → Binary (yes/no) with custom CNN

Run in **Google Colab** for GPU support.

---
