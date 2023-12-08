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
          url: "http://localhost:3001/danhmuckhachhang",
          success: function (data){
              var html = '';
              if(data.length > 0)
              {
                  data.forEach(item => {
                      html += `
                          <tr>
                            <td>`+item.cMaKhachHang+`</td>
                            <td>`+item.cTenKhachHang+`</td>
                            <td>`+item.cMaSoThue+`</td>
                            <td>`+item.cDiaChi+`</td>
                            <td>`+item.cTinhThanhPho+`</td>
                            <td>`+item.cDienThoai+`</td>
                            <td>`+item.cFax+`</td>
                        
                              <td>
                                  <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item.cMaKhachHang+`">Delete</button>
                                  <button type="button" class="btn btn-success btn-sm delete" data-id="`+item._id+`">Detail</button>
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
    var makhachhang = $(this).data('id');
     const cMaKhachHang   =makhachhang;
     console.log(cMaKhachHang);
     if(confirm("Are you sure you want to delete this data?"))
     {
         $.ajax({
             url:"http://localhost:3001/danhmuckhachhang/deletekhachhang/"+cMaKhachHang,
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

