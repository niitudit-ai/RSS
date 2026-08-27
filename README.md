# 🚩 युवा व्यवसायी गोष्ठी - ३० अगस्त

## Registration Form with Google Sheet Integration

Beautiful RSS-themed registration form for युवा व्यवसायी गोष्ठी event.

---

## 📁 Files

| File | Description |
|------|-------------|
| `index.html` | Beautiful RSS-themed form (GitHub Pages पर host होगा) |
| `google-sheet-script.gs` | Google Apps Script (data Google Sheet में save करेगा) |
| `README.md` | Setup instructions (यही file) |

---

## 🚀 SETUP GUIDE (पूरा सेटअप कैसे करें)

### Part 1: Google Sheet + Script Setup (5 minutes)

#### Step 1: New Google Sheet बनाओ
1. 👉 [sheets.google.com](https://sheets.google.com) खोलो
2. **"Blank"** / **"+ New"** click करके new sheet बनाओ
3. Sheet का नाम दो: `युवा व्यवसायी गोष्ठी - Responses`

#### Step 2: Apps Script खोलो
1. Sheet में ऊपर menu में जाओ: **Extensions → Apps Script**
2. एक नया Apps Script editor खुलेगा

#### Step 3: Code paste करो
1. Default code (`function myFunction()...`) **पूरा select → delete** करो
2. `google-sheet-script.gs` file का पूरा code **copy करके paste** करो
3. **Ctrl+S** से save करो

#### Step 4: पहले setupSheet() run करो (Headers बनाने के लिए)
1. Function dropdown में **`setupSheet`** select करो
2. **▶ Run** दबाओ
3. Permission allow करो (Advanced → Go to... → Allow)
4. ✅ Sheet में headers orange color में बन जाएंगे

#### Step 5: Web App Deploy करो
1. ऊपर **"Deploy"** button → **"New deployment"** click करो
2. ⚙️ Gear icon (Select type) → **"Web app"** select करो
3. Settings:
   - **Description:** `युवा गोष्ठी Form Backend`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. **"Deploy"** click करो
5. 🔗 **Web App URL copy करो** (बहुत ज़रूरी!)
   - URL कुछ ऐसा दिखेगा: `https://script.google.com/macros/s/AKfyc.../exec`

---

### Part 2: HTML Form में URL डालो

#### Step 6: Form में Script URL connect करो
1. `index.html` file खोलो (किसी भी text editor में)
2. नीचे वाली line ढूंढो:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE';
```
3. `YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE` हटाकर Step 5 में copy किया URL paste करो:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
```
4. Save करो

---

### Part 3: GitHub Pages पर Host करो (Free!)

#### Step 7: GitHub Repository बनाओ
1. 👉 [github.com](https://github.com) पर login करो
2. ऊपर **"+"** → **"New repository"** click करो
3. Settings:
   - **Repository name:** `yuva-goshthi-form`
   - **Public** select करो ✅
4. **"Create repository"** click करो

#### Step 8: File Upload करो
1. Repository page पर **"uploading an existing file"** link click करो
2. `index.html` file drag & drop करो (या choose files से select करो)
3. **"Commit changes"** click करो

#### Step 9: GitHub Pages ON करो
1. Repository में जाओ → **Settings** tab
2. Left sidebar में **"Pages"** click करो
3. **Source:** `Deploy from a branch` select करो
4. **Branch:** `main` select करो, folder: `/ (root)`
5. **"Save"** click करो
6. ⏳ 1-2 minute wait करो
7. ✅ ऊपर link दिखेगा: `https://YOUR-USERNAME.github.io/yuva-goshthi-form/`

---

## ✅ DONE! अब क्या होगा:

```
📱 कोई form भरेगा
    ↓
🌐 Data Google Script को जाएगा
    ↓
📊 Google Sheet में row add होगी
    ↓
😊 आप Sheet में सब responses देख सकते हो!
```

---

## 🔗 Share कैसे करें:

Form का link (`https://YOUR-USERNAME.github.io/yuva-goshthi-form/`) share करो:
- ✅ WhatsApp पर
- ✅ SMS से
- ✅ QR Code बनाकर
- ✅ Facebook/Instagram पर

---

## ⚠️ Important Notes:

1. **Google Script URL** ज़रूर डालो `index.html` में, वरना data save नहीं होगा
2. GitHub Pages activate होने में **1-2 minute** लग सकते हैं
3. Sheet में **Extensions → Apps Script** से script manage कर सकते हो
4. New deployment करने पर **URL बदल जाता है** — ध्यान रखो

---

## 🎨 Form Features:

- 🚩 RSS/भगवा themed design
- 📱 Mobile responsive
- ✨ Smooth animations
- ✅ Form validation
- 🎉 Success message popup
- 📊 Google Sheet integration

---

## 📞 Form Fields:

| # | Field | Required |
|---|-------|----------|
| 1 | नाम | ✅ |
| 2 | पिता का नाम | ✅ |
| 3 | पत्र व्यवहार का पता | ✅ |
| 4 | शिक्षा | ❌ |
| 5 | व्यवसाय | ❌ |
| 6 | दूरभाष | ✅ |
| 7 | ई-पता (Email) | ❌ |
| 8 | रुचि (8 options - checkbox) | ✅ |

---

🙏 जय हिन्द | राष्ट्र सेवा में समर्पित 🚩
