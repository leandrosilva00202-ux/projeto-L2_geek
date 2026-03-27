

function App() {
  return (
    <>
        <header>
              <h1 class="logo">l2 geek</h1>
    <nav class="navigation">
                 <a href="#">home</a>
                 <a href="#">services</a>
                 <a href="#">about</a>
                 <a href="#">contact</a>
                 <button class="btnLogin-popup">login</button>
        <svg  xmlns="http://www.w3.org/2000/svg" width={60} height={60}
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M8.5 10.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5S14 7 12 7s-3.5 1.5-3.5 3.5m5 0c0 .88-.62 1.5-1.5 1.5s-1.5-.62-1.5-1.5S11.12 9 12 9s1.5.62 1.5 1.5"></path><path d="m20.53 7.15-8-5c-.32-.2-.74-.2-1.06 0l-8 5c-.29.18-.47.5-.47.85v8c0 .34.18.67.47.85l8 5a1.01 1.01 0 0 0 1.06 0l8-5c.29-.18.47-.5.47-.85V8c0-.34-.18-.67-.47-.85M12 19.82l-3.1-1.94c.55-.56 1.29-.88 2.1-.88h2c.8 0 1.55.32 2.1.88zm7-4.38-2.19 1.37A4.97 4.97 0 0 0 13 15h-2c-1.48 0-2.87.68-3.81 1.81L5 15.44V8.55l7-4.38 7 4.38z"></path>
</svg>

    </nav>

    </header>

    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close"></ion-icon>
        </span>
    
        <div class="form-box login">
           <h2>login</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required/>
                    <label>email</label>
                </div>
                <div class="input-box">
                     <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required/>
                    <label>password</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox"/>remember me</label>
                    <a href="#"> forgot password</a>
                </div>
                <button type="submit" class="btn">login</button>
                <div class="login-register">
                    <p>don`t have an account- <a href="#" class="register-link">register</a></p>
                </div>
            </form>
        </div>
    </div>
    
     <script src="index.js"></script>
     <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    
    <h2>colecao</h2>
    <div class="categorias">
      
        <ul>
            <li><a href="">oversized</a></li>
        </ul>
        <ul>
            <li><a href="">cargo</a></li>
        </ul>
         <ul>
            <li/><a href="">street</a>
         </ul>
         </div>

    <h3>onde nos encontrar</h3>
<section>
         
        <ul>
            <li>
                <span class="circulo">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/042/387/654/small/instagram-button-icon-set-instagram-screen-social-media-and-social-network-interface-template-stories-user-button-symbol-sign-logo-stories-liked-editorial-free-png.png"  alt=""/>

                   
                </span>

                <a href="https://www.instagram.com/l2geek/#">instagram</a>
                
            </li>
            </ul>

        <ul>
            <li>
                <span class="circulo">
                    <img src="https://static.vecteezy.com/system/resources/previews/065/901/903/non_2x/circle-whatsapp-business-3d-render-icon-free-png.png" class="perfil-circular" alt=""/> 
                
                </span>

                <a href="https://wa.me/5585991856367">whatsapp</a>
               
            </li>
        </ul>

    
    
    </section>

    <footer>
        since 2026
    </footer>

    </>
  );
  }


export default App;
    