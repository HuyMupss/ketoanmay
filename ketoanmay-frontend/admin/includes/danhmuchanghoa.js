function  replaceslash(inputstring){
    const replacestring =inputstring.replace(/\//g, '-')
    return replacestring;
 
   
}
$(document).ready(function () {
  load_data();
  function load_data() {
      $.ajax({
          metdod: "GET",
          dataType: "json",
          url: "http://localhost:3001/danhmuchanghoa",
          success: function (data){
              var html = '';
              if(data.length > 0)
              {
                  data.forEach(item => {
                      html += `
                          <tr>
                            <td>`+item.cMaHang+`</td>
                            <td>`+item.cTenHang+`</td>
                            <td>`+item.cNhomHang+`</td>
                            <td>`+item.cDonViTinh+`</td>
                            <td>`+item.nSoLuongTonDau+`</td>
                            <td>`+item.nThanhTienTonDau+`</td>
                            <td>`+item.dNgayTonDau+`</td>
                        
                              <td>
                              <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                              <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item.cMaHang+`">Delete</button>
                              <button type="button" class="btn btn-success btn-sm delete" data-id="`+item._id+`">Detail</button>
                          </tr>
                              </td>
                          </tr>
                      `;
                  });
              }
              $('#table_data tbody').html(html);
              console.log(data);
          }
      });
  };
  $(document).on('click', '.delete', function(){
    var mahang = $(this).data('id');
     const cMaHang   = replaceslash(mahang);
     console.log(cMaHang);
     if(confirm("Are you sure you want to delete this data?"))
     {
         $.ajax({
             url:"http://localhost:3001/danhmuchanghoa/deletehanghoa/"+cMaHang,
             method:"DELETE",
             success:function()
             {
                 alert("Delete Successfully!");
                 load_data();
             }
         });
     }

 }); 
})

