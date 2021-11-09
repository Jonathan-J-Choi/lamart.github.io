$('.carousel').carousel({
  interval: 4000
})

/**
* Example of pushing WURFL capabilities to google analytics
*/
ga('send', 'pageview', {
    'dimension1': WURFL.complete_device_name,
    'dimension2': WURFL.form_factor,
    'dimension3': WURFL.is_mobile,
    'dimension4': WURFL.is_robot
});