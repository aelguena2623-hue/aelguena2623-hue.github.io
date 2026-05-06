$(document).ready(function() {
    $(window).on('scroll', function() {
    let scrollPos = $(window).scrollTop() + $(window).height();
    
    $('.timeline-item').each(function() {
        let itemPos = $(this).offset().top;
        
        if (scrollPos > itemPos + 100) {
            $(this).addClass('show');
        }
    });
});
    
    $(document).on('click', '.formation .title', function() {
        $(".formation .content").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    $(window).on('scroll', function() {
        let aboutPos = $("#abou").offset()?.top;
        if ($(window).scrollTop() + $(window).height() > aboutPos + 100) {
            $(".about-card").addClass("show");
        }
    });
    $(document).on('submit', '.contact-form-futu', function(e) {
    let nameInput = $(this).find('input[type="text"]');
    let emailInput = $(this).find('input[type="email"]');
    let messageInput = $(this).find('textarea');

    let name = nameInput.val().trim();
    let email = emailInput.val().trim();
    let message = messageInput.val().trim();
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $(".error-msg").remove();

    let isValid = true;

    if (name === "") {
        nameInput.after('<span class="error-msg" style="color: #ff4d4d; font-size: 12px; display: block;">Name is required</span>');
        isValid = false;
    }

    if (email === "") {
        emailInput.after('<span class="error-msg" style="color: #ff4d4d; font-size: 12px; display: block;">Email is required</span>');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailInput.after('<span class="error-msg" style="color: #ff4d4d; font-size: 12px; display: block;">Invalid email format</span>');
        isValid = false;
    }

    if (message === "") {
        messageInput.after('<span class="error-msg" style="color: #ff4d4d; font-size: 12px; display: block;">Message cannot be empty</span>');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault(); 
    } else {
        e.preventDefault(); 
        alert("Thank you, " + name + "! Your message has been sent successfully.");
        $(this)[0].reset(); 
    }
});
    
});



$(document).ready(function() {

    $(window).on('scroll', function() {
        let skillsSection = $('#skills');
        if (skillsSection.length) {
            let topPosition = skillsSection.offset().top - window.innerHeight + 100;

            if ($(window).scrollTop() > topPosition) {
                $('.progress-line').each(function() {
                    let targetWidth = $(this).attr('data-per');
                    $(this).find('.progress-fill').css('width', targetWidth);
                });
            }
        }
    });
});

$(window).on('scroll', function() {
    let skillsSection = $('#skills');
    
    if (skillsSection.length) {
        let topPosition = skillsSection.offset().top - window.innerHeight + 100;

        if ($(window).scrollTop() > topPosition) {
            $('.progress-fill-futu').each(function() {
                let targetWidth = $(this).attr('data-per'); 
                $(this).css('width', targetWidth); 
            });
        }
    }
});

