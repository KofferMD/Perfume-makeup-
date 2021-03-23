$((function () {
    $(".header__slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(".product__best-items").slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="40" viewBox="0 0 21 40"><image id="right-arrow_copy" data-name="right-arrow copy" width="21" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAB+0lEQVRIia2XW0tUURTHf4Zfyucuvqh0VVHJh6KgXoOaSWes1HnooaKCbogQXYgSiwhvqCX5NN+hTxDo6DCOTRdWrAOLzZk5+5x91tOs5Zmf/7X/6+y9p6tarZJT3AN6gMnunICvgBH9fP9IDsA5A5RYClX6Ehgz+TvgeojS5w5Q/sEQ0MqqdB4YdxSej5IsSp85wLfAsH0grVJp+aLJ3zgmpYa+AC6Y/AMwGvegb/tPHOBr4CzwN+5hH6Vuy5+sKVmUPnKA4vIp4HenL3VS+hS4ZPKPuoZ/EoS0VfrQAS7oGraSgO2USstXTS4un2tnig/0MXDF5J91sL2BOO0/cIDvgQHfluOUui0v62aRSqFVetcBisv9QDMLMIJeM3n0pvzKCiRmpH5kWcM46BeT3wRm8oAOAl9NrQhUQqF14IQ6HsUN4FYIVOJQFX8zfysBsyFQiRrQC6yYWgGYCoFKHOhIrZtaOa15cbvUHtAHrJmamDcdApVoACeBVVOTcbsTAkWn4jSwZWoTPuYlHSf7wHFHcSFp3HxO06Zu0lZxqZN5vkf0ro6bVVxsN25prj0NHbdNUyvHmZf2LlXTcdswtQkXnOWCVtdN3C6FgG+HQCPwGeC7qU1G5oXcpOXNO6on7jGtiXk/Q+/80bhtm9rlPH5I7OgLsvh/9KDyD5YcbNPk/DHwAAAAAElFTkSuQmCC"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="40" viewBox="0 0 21 40"><image id="right-arrow" width="21" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAB8klEQVRIia2W20pVURSGv2Q/gw/RC/gAUl5paplmYognMBESwdQuPGTeGim4VUQQVNRCRULdoqloj9ErVCoeypIBc8Jgsvbea6/hfzcGa338cxwm80E6nX4EjADfgTfcg1LAOPAQKAGKgZdWbBGwreJ6YO4+oL3Aiso1AQtW6F+gNgA1ADMWqFdj4LgFmLdCRXXAsopfAdNW6H/gBbCkcq2FliKEeslYfVaxlGLWChXHz4BFlWsGpixQL2neporb45QiH/QWqIqYigkLVPTP1XhD5V4DaQsUtyBS4y8q1wZ8skA1WE9FZ1QpCoHipkIWZEvlpBSTFijOcQWwpnIdwEcLFOdYLp0dlevypUglhIqugXJgFXjiclKKy6ROvf5EbF6PFYqr8Q+dsBzfaxToV/FXK3QMeKviQ+C55fhDAVAm4TFwkdTpB6BPxUfiELgh4ZwOBsBdoAz47ROFOg2bsu9G6kp/VAj0fQDcc+t6GX4Y9/jy1hpQcQaojALGdRo25Rioli5n+yGf06EAKA7llXie66dcTsOmiMMad5HkVDangwEw48bmVz5gNqfSlHcq/ubGJrIpcaAh8MDdmVmbEiV9/OEAmEkC1E7DppwAT5MAReK0O2JTSoGzJEAPlfeR12ncsckHlYtWRmXdDfZPCxDgDr2bbctpae2tAAAAAElFTkSuQmCC"/></svg>',
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $(".preview__slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });

    $(".products__top-women").slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="40" viewBox="0 0 21 40"><image id="right-arrow_copy" data-name="right-arrow copy" width="21" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAB+0lEQVRIia2XW0tUURTHf4Zfyucuvqh0VVHJh6KgXoOaSWes1HnooaKCbogQXYgSiwhvqCX5NN+hTxDo6DCOTRdWrAOLzZk5+5x91tOs5Zmf/7X/6+y9p6tarZJT3AN6gMnunICvgBH9fP9IDsA5A5RYClX6Ehgz+TvgeojS5w5Q/sEQ0MqqdB4YdxSej5IsSp85wLfAsH0grVJp+aLJ3zgmpYa+AC6Y/AMwGvegb/tPHOBr4CzwN+5hH6Vuy5+sKVmUPnKA4vIp4HenL3VS+hS4ZPKPuoZ/EoS0VfrQAS7oGraSgO2USstXTS4un2tnig/0MXDF5J91sL2BOO0/cIDvgQHfluOUui0v62aRSqFVetcBisv9QDMLMIJeM3n0pvzKCiRmpH5kWcM46BeT3wRm8oAOAl9NrQhUQqF14IQ6HsUN4FYIVOJQFX8zfysBsyFQiRrQC6yYWgGYCoFKHOhIrZtaOa15cbvUHtAHrJmamDcdApVoACeBVVOTcbsTAkWn4jSwZWoTPuYlHSf7wHFHcSFp3HxO06Zu0lZxqZN5vkf0ro6bVVxsN25prj0NHbdNUyvHmZf2LlXTcdswtQkXnOWCVtdN3C6FgG+HQCPwGeC7qU1G5oXcpOXNO6on7jGtiXk/Q+/80bhtm9rlPH5I7OgLsvh/9KDyD5YcbNPk/DHwAAAAAElFTkSuQmCC"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="40" viewBox="0 0 21 40"><image id="right-arrow" width="21" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAB8klEQVRIia2W20pVURSGv2Q/gw/RC/gAUl5paplmYognMBESwdQuPGTeGim4VUQQVNRCRULdoqloj9ErVCoeypIBc8Jgsvbea6/hfzcGa338cxwm80E6nX4EjADfgTfcg1LAOPAQKAGKgZdWbBGwreJ6YO4+oL3Aiso1AQtW6F+gNgA1ADMWqFdj4LgFmLdCRXXAsopfAdNW6H/gBbCkcq2FliKEeslYfVaxlGLWChXHz4BFlWsGpixQL2neporb45QiH/QWqIqYigkLVPTP1XhD5V4DaQsUtyBS4y8q1wZ8skA1WE9FZ1QpCoHipkIWZEvlpBSTFijOcQWwpnIdwEcLFOdYLp0dlevypUglhIqugXJgFXjiclKKy6ROvf5EbF6PFYqr8Q+dsBzfaxToV/FXK3QMeKviQ+C55fhDAVAm4TFwkdTpB6BPxUfiELgh4ZwOBsBdoAz47ROFOg2bsu9G6kp/VAj0fQDcc+t6GX4Y9/jy1hpQcQaojALGdRo25Rioli5n+yGf06EAKA7llXie66dcTsOmiMMad5HkVDangwEw48bmVz5gNqfSlHcq/ubGJrIpcaAh8MDdmVmbEiV9/OEAmEkC1E7DppwAT5MAReK0O2JTSoGzJEAPlfeR12ncsckHlYtWRmXdDfZPCxDgDr2bbctpae2tAAAAAElFTkSuQmCC"/></svg>',
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $(".products__top-men").slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="40" viewBox="0 0 21 40"><image id="right-arrow_copy" data-name="right-arrow copy" width="21" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAB+0lEQVRIia2XW0tUURTHf4Zfyucuvqh0VVHJh6KgXoOaSWes1HnooaKCbogQXYgSiwhvqCX5NN+hTxDo6DCOTRdWrAOLzZk5+5x91tOs5Zmf/7X/6+y9p6tarZJT3AN6gMnunICvgBH9fP9IDsA5A5RYClX6Ehgz+TvgeojS5w5Q/sEQ0MqqdB4YdxSej5IsSp85wLfAsH0grVJp+aLJ3zgmpYa+AC6Y/AMwGvegb/tPHOBr4CzwN+5hH6Vuy5+sKVmUPnKA4vIp4HenL3VS+hS4ZPKPuoZ/EoS0VfrQAS7oGraSgO2USstXTS4un2tnig/0MXDF5J91sL2BOO0/cIDvgQHfluOUui0v62aRSqFVetcBisv9QDMLMIJeM3n0pvzKCiRmpH5kWcM46BeT3wRm8oAOAl9NrQhUQqF14IQ6HsUN4FYIVOJQFX8zfysBsyFQiRrQC6yYWgGYCoFKHOhIrZtaOa15cbvUHtAHrJmamDcdApVoACeBVVOTcbsTAkWn4jSwZWoTPuYlHSf7wHFHcSFp3HxO06Zu0lZxqZN5vkf0ro6bVVxsN25prj0NHbdNUyvHmZf2LlXTcdswtQkXnOWCVtdN3C6FgG+HQCPwGeC7qU1G5oXcpOXNO6on7jGtiXk/Q+/80bhtm9rlPH5I7OgLsvh/9KDyD5YcbNPk/DHwAAAAAElFTkSuQmCC"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="40" viewBox="0 0 21 40"><image id="right-arrow" width="21" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAB8klEQVRIia2W20pVURSGv2Q/gw/RC/gAUl5paplmYognMBESwdQuPGTeGim4VUQQVNRCRULdoqloj9ErVCoeypIBc8Jgsvbea6/hfzcGa338cxwm80E6nX4EjADfgTfcg1LAOPAQKAGKgZdWbBGwreJ6YO4+oL3Aiso1AQtW6F+gNgA1ADMWqFdj4LgFmLdCRXXAsopfAdNW6H/gBbCkcq2FliKEeslYfVaxlGLWChXHz4BFlWsGpixQL2neporb45QiH/QWqIqYigkLVPTP1XhD5V4DaQsUtyBS4y8q1wZ8skA1WE9FZ1QpCoHipkIWZEvlpBSTFijOcQWwpnIdwEcLFOdYLp0dlevypUglhIqugXJgFXjiclKKy6ROvf5EbF6PFYqr8Q+dsBzfaxToV/FXK3QMeKviQ+C55fhDAVAm4TFwkdTpB6BPxUfiELgh4ZwOBsBdoAz47ROFOg2bsu9G6kp/VAj0fQDcc+t6GX4Y9/jy1hpQcQaojALGdRo25Rioli5n+yGf06EAKA7llXie66dcTsOmiMMad5HkVDangwEw48bmVz5gNqfSlHcq/ubGJrIpcaAh8MDdmVmbEiV9/OEAmEkC1E7DppwAT5MAReK0O2JTSoGzJEAPlfeR12ncsckHlYtWRmXdDfZPCxDgDr2bbctpae2tAAAAAElFTkSuQmCC"/></svg>',
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });



}));