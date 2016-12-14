function showCars()
{
    var $header = $("<h2 align='center' id='tab'>Show Cars</h2><br>");
    var data = JSON.parse(localStorage.getItem('person'));
    var $foot = $("<div class='modal-footer'>&copy; akhil trivedi</div>");
    var myObject = data.filter(function (person)
        {
            return person.name ==  document.myForm.tags.value;
        }
    );
    var $div1 =  $("<div></div><br>" );
    var $table =  $("<table class='table table-responsive' align='center'></table><br>" );
    for ( var i = 0; i < myObject.length; i++ )
    {
       var  $line1 = $( "<thead align='center'></thead>" );
        $line1.append( $( "<td></td>" ).html('<b>car</b>' ));
        $line1.append( $( "<td></td>" ).html('<b>year</b>' ));
        $line1.append( $( "<td></td>" ).html('<b>Delete Car</b>' ) );
        $line1.append( $( "<td></td>" ).html('<b>Add Car</b>'));

        var $line = $( "<tr align='center'></tr>" );
        $line.append( $( "<td></td>" ).html( myObject[i].car ));
        $line.append( $( "<td></td>" ).html( myObject[i].year));
        $line.append( $( "<td></td>" ).html( '<a href="#" onclick="showCars()">Delete Car</a>'));
        $line.append( $( "<td></td>" ).html( '<a href="#" onclick="showCars()">Add Car</a>'));

        $div1.append($header);
        $div1.append($line1);
        $div1.append($line);
        $div1.append($table);
        $div1.append($foot);
        $div1.appendTo(document.body);
    }
}