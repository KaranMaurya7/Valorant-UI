
const containerAndNavAnim = () => {
    const container = document.querySelector(".container")
    const navLogo = document.querySelector("#logo")
    const midNav = document.querySelectorAll(".mid-nav span , #download")
    const frontImage = document.querySelector(".forward img")
    const backImage = document.querySelector(".backward img")

    const timeline = gsap.timeline()

    timeline.from(container, {
        y: "100vh",
        opacity:0,
        duration: 0.5,
        delay:0.5
    })

    timeline.from(navLogo, {
        y: -30,
        opacity:0,
        duration: 0.3,
        delay:0.5
    })  

    timeline.from(midNav, {
        y: -30,
        opacity:0,
        duration: 0.3,
        stagger: 0.2,
    })  
    timeline.from(backImage, {
        x: -30,
        opacity:0,
        duration: 0.3,
    })  

    timeline.from(frontImage, {
        y: "100vh",
        duration: 0.5,
        delay:0.3
    })

}


containerAndNavAnim()
mouseOverEventOnContainer()
