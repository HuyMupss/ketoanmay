$(document).ready(function () {
  load_data();
  function load_data() {
      $.ajax({
          metdod: "GET",
          dataType: "json",
          url: "http://localhost:3001/danhmuctaikhoan",
          success: function (data){
              var html = '';
              if(data.length > 0)
              {
                  data.forEach(item => {
                      html += `
                          <tr>
                            <td>`+item.cTaiKhoan+`</td>
                            <td>`+item.cTenTaiKhoan+`</td>
                            <td>`+item.nSoDuNoDau+`</td>
                            <td>`+item.nSoDuCoDau+`</td>
                            <td>`+item.bCoDinhKhoan+`</td>
                            <td>`+item.cCap+`</td>
                            <td>`+item.dNgaySoDu+`</td>
                        
                              <td>
                                  <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item.cTaiKhoan+`">Delete</button>
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
    var taikhoan = $(this).data('id');
     const cTaiKhoan   =taikhoan;
     console.log(cTaiKhoan);
     if(confirm("Are you sure you want to delete this data?"))
     {
         $.ajax({
             url:"http://localhost:3001/danhmuctaikhoan/deleteTaiKhoan/"+cTaiKhoan,
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

