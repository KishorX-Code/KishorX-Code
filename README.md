<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hello Coder - Kishor</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1d3557, #457b9d);
      color: white;
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      background: linear-gradient(135deg, #1d3557, #457b9d);
    }

    h1 {
      font-size: 3rem;
      animation: fadeInDown 2s ease-in-out;
    }

    .button {
      margin-top: 20px;
      padding: 12px 24px;
      font-size: 1rem;
      border: none;
      border-radius: 30px;
      background-color: #f1faee;
      color: #1d3557;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, background-color 0.3s ease;
      animation: slideUp 2s ease-out 1s forwards;
      opacity: 0;
    }

    .button:hover {
      transform: scale(1.1);
      background-color: #a8dadc;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    section {
      padding: 40px 20px;
      background-color: #f8f9fa;
      color: #000;
    }

    img {
      max-width: 100%;
    }

    .stats img, .trophies img {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
    }

    .socials, .tech, .stats, .trophies, .quote {
      text-align: center;
      margin-top: 40px;
    }

    .badge-container img {
      margin: 5px;
    }

    .snake {
      display: flex;
      justify-content: center;
      margin: 40px 0;
    }
  </style>
</head>
<body>

  <header>
    <h1>Hello Coder, It's me Kishor 👨‍💻</h1>
    <button class="button" onclick="document.getElementById('profile').scrollIntoView({behavior: 'smooth'})">
      Scroll to Profile
    </button>
  </header>

  <section id="profile">
    <div class="socials">
      <h2>🌐 Socials:</h2>
      <a href="https://www.facebook.com/profile.php?id=100077173124914">
        <img src="https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white" alt="Facebook"/>
      </a>
      <a href="https://www.instagram.com/its_ki_shor7/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white" alt="Instagram"/>
      </a>
      <a href="mailto:kishorkunwar23@gmail.com">
        <img src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white" alt="Email"/>
      </a>
    </div>

    <div class="tech">
      <h2>💻 Tech Stack:</h2>
      <div class="badge-container">
        <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"/>
        <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"/>
        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
        <img src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"/>
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
        <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"/>
        <img src="https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white"/>
        <img src="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white"/>
        <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"/>
        <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/>
        <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white"/>
        <img src="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white"/>
        <img src="https://img.shields.io/badge/xbox-%23107C10.svg?style=for-the-badge&logo=xbox&logoColor=white"/>
        <img src="https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white"/>
      </div>
    </div>

    <div class="stats">
      <h2>📊 GitHub Stats:</h2>
      <img src="https://github-readme-stats.vercel.app/api?username=KishorX-Code&theme=one_dark_pro&hide_border=false&include_all_commits=true&count_private=false"/>
      <img src="https://nirzak-streak-stats.vercel.app/?user=KishorX-Code&theme=one_dark_pro&hide_border=false"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=KishorX-Code&theme=one_dark_pro&hide_border=false&include_all_commits=true&count_private=false&layout=compact"/>
    </div>

    <div class="snake">
      <img src="https://profile-readme-generator.com/assets/snake.svg" alt="Snake animation"/>
    </div>

    <div class="trophies">
      <h2>🏆 GitHub Trophies:</h2>
      <img src="https://github-profile-trophy.vercel.app/?username=alamimran613&theme=radical&no-frame=false&no-bg=false&margin-w=4"/>
    </div>

    <div class="quote">
      <h2>✍️ Random Dev Quote:</h2>
      <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Dev quote"/>
    </div>

    <div class="top-repo">
      <h2>🔝 Top Contributed Repo:</h2>
      <img src="https://github-contributor-stats.vercel.app/api?username=KishorX-Code&limit=5&theme=dark&combine_all_yearly_contributions=true"/>
    </div>

    <div class="visits">
      <br/>
      <a href="https://visitcount.itsvg.in">
        <img src="https://visitcount.itsvg.in/api?id=KishorX-Code&icon=6&color=1" alt="Visit Count"/>
      </a>
    </div>
  </section>

</body>
</html>
