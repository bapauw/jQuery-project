<script>
    var jumpInterval;
    var intervalCount = 0;

    $(document).keydown(function (e) {
        if (e.keyCode == 38) {
            $('#mainChar').attr('src', 'images/mainCharJump.png');
            
            jumpInterval = setInterval(function () {
                intervalCount++;
                
                if (intervalCount == 60) {
                    $('#mainChar').attr('src', 'images/mainChar.png');
                    
                    clearInterval(jumpInterval);
                    
                    $('#mainChar').animate({
                        'bottom': '50px'
                    });
                    
                    intervalCount = 0;
                }
            });
        }
    });
</script>