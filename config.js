// ------------------------------------------------------------------
// 포켓 더비 설정 파일
// 1) Firebase 콘솔 > 프로젝트 설정(톱니바퀴) > 일반 > 내 앱 > 웹 앱 의
//    firebaseConfig 값을 그대로 아래에 붙여넣으세요.
// 2) ADMIN_EMAIL 에는 Firebase Authentication 에서 만든 관리자 계정 이메일을 넣으세요.
//    (database.rules.json 안의 이메일과 반드시 같아야 합니다)
// 이 값들은 공개되어도 괜찮은 값입니다. 실제 보안은 데이터베이스 규칙이 담당합니다.
// ------------------------------------------------------------------

export const firebaseConfig = {
apiKey: "AIzaSyBTQp-Weq3VvyJaJxVxiLYPeyvZ2owhUow",
  authDomain: "pokeevent-4f427.firebaseapp.com",
  databaseURL: "https://pokeevent-4f427-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pokeevent-4f427",
  storageBucket: "pokeevent-4f427.firebasestorage.app",
  messagingSenderId: "3509285379",
  appId: "1:3509285379:web:7bc8992f03665ee8ac5436"
};

export const ADMIN_EMAIL = "hongbono011102@gmail.com";
export const SCHEDULE = { intervalMinutes: 120, offsetMinutes: 30, minPlayers: 6, maxPlayers: 20 };
