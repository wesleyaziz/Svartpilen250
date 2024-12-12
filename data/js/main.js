const startBtn = document.querySelector('.startBtn')

document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click',()=>{
        window.scrollBy({
            top: window.innerHeight * 0.95,
            behavior: 'smooth'
        })
    })
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate', 
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        
        offset: 120,
        delay: 0,
        duration: 900,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    })

    document.querySelector('#tabSelect').addEventListener('change', function(e) {
        const selectedValue = e.target.value
        const tabContent = document.getElementById(selectedValue)
        
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('show', 'active')
        })
        
        tabContent.classList.add('show', 'active')
    });
    // dealer map
    const map = L.map('map').setView([57.78828501578254, 14.280658571178456], 15)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        L.marker([57.78828501578254, 14.280658571178456]).addTo(map)
            .bindPopup('Husqvarna')
            .openPopup()
})



