# !/bin/bash

printf "// Import firebase\nimport firebase from \"firebase/compat/app\"\nimport \"firebase/storage\"\nimport \"firebase/compat/firestore\"\nimport { getStorage } from \"firebase/storage\";\n\n// Initialize firebase\nconst firebaseConfig = {\n	apiKey: \"AIzaSyA1YWm8wjjXJjqfpGVj8hz58CpCGlaLqOI\",\n	authDomain: \"fireg-e8b5c.firebaseapp.com\",\n	projectId: \"fireg-e8b5c\",\n	storageBucket: \"fireg-e8b5c.appspot.com\",\n	messagingSenderId: \"907615339969\",\n	appId: \"1:907615339969:web:8c88305b58eaf7012ddb40\",\n	measurementId: \"G-38LKYYJB1F\"\n};\n\nconst app = firebase.initializeApp(firebaseConfig)\nexport const storage = getStorage(app)\n" > src/firebase.js