# 🚀 WakeSenseMobile - Setup Guide

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [**Node.js**](https://nodejs.org/) (Recommended: v16+)
- [**Git**](https://git-scm.com/) (For cloning the repository)
- [**Android Studio**](https://developer.android.com/studio) (To create an Android emulator)
- **Expo CLI** (For running the project)

---

## 📌 Step 1: Install Expo CLI

First, install Expo CLI globally on your system:

```sh
npm install -g expo-cli
```

---

## 📌 Step 2: Clone the Repository

Clone the project and navigate to the directory:

```sh
git clone https://github.com/your-repo/alarm-app.git
cd alarm-app
```

Then install the project dependencies:

```sh
npm install  --legacy-peer-deps
```

---

## 📌 Step 3: Setup Android Emulator

To run the app on an **Android emulator**, follow these steps:

1. **Install Android Studio**:  
   Download and install **[Android Studio](https://developer.android.com/studio)** if you haven't already.

2. **Open Android Studio and create an emulator**:

   - Open **Android Studio**.
   - Go to **Tools → Device Manager**.
   - Click **Create Virtual Device**.
   - Select **Pixel 3** (or any recommended device).
   - Click **Next**, select **a system image (API 31 or later)**, and click **Next**.
   - Click **Finish** and start the emulator.

3. **Ensure the emulator is running**:
   - Open the **Device Manager** in Android Studio.
   - Click **Play** (▶️) to start your emulator.

---

## 📌 Step 4: Start the Expo Development Server

Run the following command in your terminal:

```sh
npx expo start
```

This will open the **Expo Developer Tools** in your browser.

---

## 📌 Step 5: Run the App on the Emulator

Once the **Expo Developer Tools** are open:

1. Look for the **"Run on Android device/emulator"** option.
2. Click **"Run on Android emulator"**.
3. Wait for the app to load in the emulator.

---

## 🎉 You're Ready to Go!

Now you can start developing and testing the app using **Expo Go**! 🚀

For any issues, check the **Expo documentation**:  
🔗 [https://docs.expo.dev/](https://docs.expo.dev/)
