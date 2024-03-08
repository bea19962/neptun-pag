import gsap from 'gsap'
import Observer from 'gsap/Observer'

gsap.registerPlugin(Observer) 

Observer.create({
  target: window, // can be any element (selector text is fine)
  type: 'wheel,touch, pointer', // comma-delimited list of what to listen for
  onUp: () => previous(),
  onDown: () => next()
})
