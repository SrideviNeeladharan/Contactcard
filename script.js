$(document).ready(function(){
     
    
    $('#buttonName').click(function(event){
        event.preventDefault();
        
        
        $('#dynamic').append('<div class="add"><h1>' + $("#fName").val() +" "+ $('#lName').val() + '</h1><h5>Click for Description</h5><p>' + $('#description').val()+ '</p></div>');
        
        $('.add').css({
                backgroundColor: 'powderblue',
                padding: '1em',
                border:'2px solid gray',
                margin:'2em'       
             });
               
        
         $('p').hide();
    });
       
        
            
   
        
            

    
    
    // add description click event
    
    $('#dynamic').on('click', '.add', function(){
        debugger;
        
        $(this).find('p').show().css('color','white');
        $(this).find('h5').hide();     
        
        
        
    });
    
    
    
});