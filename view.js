    /* Add Remove Car, Edit user details functions */
    function view(email)
    {
        debugger;
        $("#one").remove();
        var e = email;
        var $header = $("<h2 align='center' id='tab'>Edit User Details</h2><br>");

        data = JSON.parse(localStorage.getItem('person'));

        newgetalb = data.filter(function (a)
        {
            return a.email !== email;
        });

        var $foot = $("<div class='modal-footer'>&copy; akhil trivedi</div>");
        myObject = data.filter(function (person)
            {
                return person.email == email;
            }
        );
        var $div1 =  $("<div class='col-md-7 col-md-offset-3'></div><br>" );
        for ( i = 0; i < myObject.length; i++ )
        {
            var $line2 = $("<form class='form-group'></form>");

            if (myObject[i].member == "yes")
            {
                $line2.append( $("<input onchange='change()' type='checkbox' class='checkbox-inline' id='test' name='test' checked='checked' disabled>&nbsp;&nbsp;<label>Already Member</label><br><br>").val(myObject[i].member));
            }
            else
            {
                $line2.append( $("<input onchange='change()' type='checkbox' class='checkbox-inline' id='test' name='test' value='yes'>&nbsp;&nbsp;<label>Want to become Member ?</label><br><br>"));
            }
            //$line2.append( $("<input type='checkbox' class='checkbox' id='test' name='test' checked='checked'><label>Member ?</label><br><br>").val(emp.member));
            $line2.append($("<input id='name'  type='text' class='form-control' value='' onchange='change()' required><br><br>").val(myObject[i].name));
            $line2.append($("<input id='email'  type='email' class='form-control' value='' onchange='change()' required disabled><br><br>").val(myObject[i].email));
            $line2.append($("<input type='tel' id='mobile' class='form-control' onchange='change()' name='phone' required><br><br>").val(myObject[i].mobile).mask('(999) 999-9999'));
            $line2.append($("<input type='submit' onclick='updatedata(\""+myObject[i].email+"\")'>"));
            $line2.append($("<input id='passs'  type='hidden' class='form-control' value='' onchange='change()' required><br><br>").val(myObject[i].pass));
            $line2.append($("<br>"));$line2.append($("<br>"));
            $line2.append($("<h2 align='center' id='tab'>Add Car</h2>"));
            $line2.append($("<br>"));
            $line2.append($("<select id='card' class='form-control'><option disabled selected>select</option><option value='zen'>zen</option><option value='alto'>alto</option><option value='wagonr'>wagonr</option></select>"));
            $line2.append($("<br>"));
            $line2.append($("<select id='yeard' class='form-control'><option disabled selected>select</option><option value='2013'>2013</option><option value='2014'>2014</option><option value='2015'>2015</option></select>"));
            $line2.append($("<br>"));
            $line2.append($("<input type='submit' onclick='addcar(\""+myObject[i].email+"\")'>"));
            $line2.append($("<br>"));
            $line2.append($("<h2 align='center' id='tab'>Car Owned</h2>"));

            if(myObject[i].car1 === "" && myObject[i].year1 === "")
                {
                    $line2.append($("<table class='table table-responsive'><thead><th>Car</th><th>year</th><th>action</th></thead>" +
                    "<tbody><tr id='d2'><td id='car2'>"+myObject[i].car2+"</td><td id='year2'>"+myObject[i].year2+"</td>" +
                    "<td><a href='#' onclick='deletecar2(\"" + myObject[i].email + "\")'>Delete</a></td></tr></tbody></table>"));
                }

            else if(myObject[i].car2 === "" && myObject[i].year2 === "")
                {
                    $line2.append($("<table class='table table-responsive'><thead><th>Car</th><th>year</th><th>action</th></thead><tbody><tr><td id='car1'>"+myObject[i].car1+"</td>" +
                    "<td id='year1'>"+myObject[i].year1+"</td><td><a href='#' onclick='deletecar1(\"" + myObject[i].email + "\")'>Delete</a></td></tr></tbody>" +
                    "<tr id='d2'><td id='car2'></td><td id='year2'></td></table>"));
                }

            else if(myObject[i].car1 === "" && myObject[i].year1 === "" && myObject[i].car2 === "" && myObject[i].year2 === "")
                {
                    
                }

            else
                {
                    $line2.append($("<table class='table table-responsive'><thead><th>Car</th><th>year</th></thead><tr><td id='car1'>"+myObject[i].car1+"</td>" +
                    "<td id='year1'>"+myObject[i].year1+"</td><td><a href='#' onclick='deletecar1(\"" + myObject[i].email + "\")'>Delete</a></td></tr>" +
                    "<tr id='d2'><td id='car2'>"+myObject[i].car2+"</td><td id='year2'>"+myObject[i].year2+"</td>" +
                    "<td><a href='#' onclick='deletecar2(\"" + myObject[i].email + "\")'>Delete</a> </td></tr></table>"));
                }

            $div1.append($header);
            $div1.append($line2);
            $div1.append($foot);
            $div1.appendTo(document.body);
        }
        if(myObject[0].car2 && myObject[0].year2 == '')
        {
            $("#d2").hide()
        }
    }

    function updatedata(email)
    {

        debugger;
        Pmem = $("#test").val();
        Pname = $('#name').val();
        Pemail = $('#email').val();
        Pmob = $('#mobile').val();
        Pcar = $('#card').val();
        Pyear = myObject[0].car2;
        Pass = myObject[0].year2;

        newcar = myObject[0].car1;
        newye = myObject[0].year1;

        getalb = localStorage.getItem('person');

        debugger

        if (!JSON.parse(getalb))
        {
            var newd = {"name":Pname,"email":Pemail,"pass":myObject[0].pass,"mobile":Pmob,"car1":newcar,"car2":Pcar,"year1":newye,"year2":Pyear,"member":Pmem};
            localStorage.setItem('person', JSON.stringify(newd));
            alert("Data Inserted Successfully..");
        }
        else
        {

            var newd = {"name":Pname,"email":Pemail,"pass":Pass,"mobile":Pmob,"car1":newcar,"car2":Pcar,"year1":newye,"year2":Pyear,"member":Pmem};
            myArray = newgetalb;

            nmyArray =  JSON.stringify(myArray);
            fmyArray1 = nmyArray.replace('[','');
            fmyArray = fmyArray1.replace(']','');
            newArray=JSON.stringify(newd);
            farray ='['+fmyArray+','+newArray+']';
            fdata =  JSON.stringify(localStorage.setItem('person',farray));
        }
    }

    function deletecar2(email) {
        debugger
         gda = localStorage.getItem('person');
        myObject1 = data.filter(function (person) {
            return person.email == email;
        });
                    delete myObject1[0].car2;
        console.log(delete myObject1[0].car2);
                    delete  myObject1[0].year2;
        console.log(delete myObject1[0].year2);

        if (JSON.parse(gda))
        {
            debugger;
            Pmem = $("#test").val();
            Pname = $('#name').val();
            Pemail = $('#email').val();
            Pmob = $('#mobile').val();
            Pass = $('#passs').val();

            newcar = myObject[0].car1;
            newye = myObject[0].year1

            myArray = {"name":Pname,"email":Pemail,"pass":Pass,"mobile":Pmob,"car1":newcar,"car2":'',"year1":newye,"year2":'',"member":Pmem};
            nmyArray1 =  JSON.stringify(myArray);
            gdarray = newgetalb;

            nmyArray =  JSON.stringify(gdarray);
            fmyArray1 = nmyArray.replace('[','');
            fmyArray = fmyArray1.replace(']','');
            darray = nmyArray1.replace('[','');
            d1array = darray.replace(']','');
            farray ='['+fmyArray+','+d1array+']';
            fdata =  JSON.stringify(localStorage.setItem('person',farray));
            location.reload();
        }

        }

    function deletecar1(email)
    {
         debugger;
         gda = localStorage.getItem('person');
        myObject1 = data.filter(function (person) {
            return person.email == email;
        });

                delete myObject1[0].car1;
        console.log(delete myObject1[0].car1);
                delete  myObject1[0].year1;
        console.log(delete myObject1[0].year1);

        if (JSON.parse(gda))
        {
            debugger;
            Pmem = $("#test").val();
            Pname = $('#name').val();
            Pemail = $('#email').val();
            Pmob = $('#mobile').val();
            Pcar = $('#card').val();
            Pyear = $('#yeard').val();
            Pass = $('#passs').val();

            myArray = {"name":Pname,"email":Pemail,"pass":Pass,"mobile":Pmob,"car1":'',"car2":Pcar,"year1":'',"year2":Pyear,"member":Pmem};
            nmyArray1 =  JSON.stringify(myArray);
            gdarray = newgetalb;

            nmyArray =  JSON.stringify(gdarray);
            fmyArray1 = nmyArray.replace('[','');
            fmyArray = fmyArray1.replace(']','');
            darray = nmyArray1.replace('[','');
            d1array = darray.replace(']','');
            farray ='['+fmyArray+','+d1array+']';
            fdata =  JSON.stringify(localStorage.setItem('person',farray));
            location.reload();
        }
    }


    function change()
    {
        debugger;
        Pmem = $("#test").val();
        Pname = $('#name').val();
        Pemail = $('#email').val();
        Pmob = $('#mobile').val();
        Pcar = $('#card').val();
        Pyear = $('#yeard').val();
        Pass = $('#passs').val();
    }

    function tbldata(email)
    {
        $line2.append($("<table class='table table-responsive'><thead><th>Name</th>" +
            "<th>Email</th><th>delete</th></thead><tr><td id='car'>"+myObject[i].car+"</td>" +
            "<td id='year'>"+myObject[i].year+"</td><td><a href='' onclick='deletecar(\""+myObject[i].email+"\")'>" +
            "<img src='images/delete.png'></a></td></tr></table>"));
    }

    function addcar(email)
    {
        debugger;
        Pmem = $("#test").val();
        Pname = $('#name').val();
        Pemail = $('#email').val();
        Pmob = $('#mobile').val();
        Pcar = $('#card').val();
        Pyear = $('#yeard').val();
        Pass = $('#passs').val();

        newcar = myObject[0].car1;
        newye = myObject[0].year1;

        getalb = localStorage.getItem('person');

        debugger;
        if (!JSON.parse(getalb))
        {
            var newd = {"name":Pname,"email":Pemail,"pass":myObject[0].pass,"mobile":Pmob,"car1":newcar,"car2":Pcar,"year1":newye,"year2":Pyear,"member":Pmem};
            localStorage.setItem('person', JSON.stringify(newd));
            alert("Data Inserted Successfully..");
        }
        else
        {

            var newd = {"name":Pname,"email":Pemail,"pass":Pass,"mobile":Pmob,"car1":newcar,"car2":Pcar,"year1":newye,"year2":Pyear,"member":Pmem};
            myArray = newgetalb;

            nmyArray =  JSON.stringify(myArray);
            fmyArray1 = nmyArray.replace('[','');
            fmyArray = fmyArray1.replace(']','');
            newArray=JSON.stringify(newd);
            farray ='['+fmyArray+','+newArray+']';
            fdata =  JSON.stringify(localStorage.setItem('person',farray));
        }
    }