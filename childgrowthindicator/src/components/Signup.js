export default function Signup(){
    return(
        <body>
    <div class="wrapper">
  <h2>SignUp</h2>
  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="Enter User ID" required />
    </div>
    <div class="input-box">
      <input type="text" placeholder="Enter Guardian's Name" required />
    </div>
    <div class="input-box">
      <input type="password" placeholder="Enter Child's Name" required />
    </div>
    <div class="input-box">
      <input type="password" placeholder="Enter Email" required />
    </div>
     <div class="input-box">
      <input type="password" placeholder="Enter Mobile No" required />
    </div>
     <div class="input-box">
      <input type="password" placeholder="Enter Date of Birth" required />
    </div>
     <div class="input-box">
      <input type="password" placeholder="Enter Living Area" required />
    </div>
    
    <div class="input-box button">
      <input type="Submit" value="SignUp" />
    </div>
    
  </form>
</div>
</body>

    )
}

