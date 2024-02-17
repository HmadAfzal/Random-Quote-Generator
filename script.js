let btns=document.querySelectorAll(".button")
let body=document.querySelector(".main")


for (const btn of btns) {

    btn.addEventListener("click",  function Toast (e){
    let toast = document.createElement("div")
if (e.target.innerHTML=="Success") {
    toast.innerHTML=`<div class="ptoast show"><div class="toast"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
    <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
    </svg>Submission successful!</div><div class="loader success"></div></div>`
}
else if(e.target.innerHTML=="Warning"){
    toast.innerHTML=`<div class="ptoast show"><div class="toast"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" width="30" height="30" viewBox="0 0 47.5 47.5" id="warning"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#ffcc4d" d="M0 0c-1.842 0-2.654 1.338-1.806 2.973l15.609 30.055c.848 1.635 2.238 1.635 3.087 0L32.499 2.973C33.349 1.338 32.536 0 30.693 0H0Z" transform="translate(3.653 2)"></path><path fill="#231f20" d="M0 0c0 1.302.961 2.108 2.232 2.108 1.241 0 2.233-.837 2.233-2.108v-11.938c0-1.271-.992-2.108-2.233-2.108-1.271 0-2.232.807-2.232 2.108V0Zm-.187-18.293a2.422 2.422 0 0 0 2.419 2.418 2.422 2.422 0 0 0 2.419-2.418 2.422 2.422 0 0 0-2.419-2.419 2.422 2.422 0 0 0-2.419 2.419" transform="translate(16.769 26.34)"></path></g></svg>
    Warning: Low battery!</div><div class="loader warning"></div></div>`
}
else{
    toast.innerHTML=`<div class="ptoast show"><div class="toast"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
</svg>Error: Connection failed.</div><div class="loader error"></div></div>`
}
    
    body.appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 20000);

})
}




