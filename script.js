const TLHeader = gsap.timeline()

TLHeader.set('.header',{y: -30 })
.set('.header',{opacity:0 })
.set('.heading',{opacity:0})
.to('.header', {opacity:1 , y:50 , duration:2})
.to('.heading', {stagger: .6 , opacity:1 , duration: 1 })
.to('nav', { x:30 , y:-20 , duration: 0.5 }, '-=0.5')





gsap.to('.partOne', {
    scrollTrigger:{
        trigger: '.partOne',
        start: '-100 center',
        scrub:true},
        stagger: 0.2,
        y:-70
})

gsap.to('.partTwo', {
    scrollTrigger:{
        trigger: '.partOne',
        start: '-150 0',
        scrub:true},
        scale: 1.1
})

gsap.from('.partThree', {
    scrollTrigger:{
        trigger: '.partTwo',
        start: '0 center',
        scrub:true},
        opacity: 0,
        stagger: 1,
})

gsap.from('.photo', {
    scrollTrigger:{
        trigger: '.partTwo',
        start: '-50 0',
        scrub:true,
        end: '+=300'},
        height:0,
        
})

gsap.to('.priceContainer', {
    scrollTrigger:{
        trigger: '.priceContainer',
        start: '0 0',
        scrub:true},
    backgroundColor: "#E6B9DE"})





