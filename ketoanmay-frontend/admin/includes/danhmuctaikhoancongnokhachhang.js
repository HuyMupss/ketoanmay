$(document).ready(function () {
  load_data();
  function load_data() {
      $.ajax({
          metdod: "GET",
          dataType: "json",
          url: "http://localhost:3001/danhmuctaikhoancongnokhachhang",
          success: function (data){
              var html = '';
              if(data.length > 0)
              {
                  data.forEach(item => {
                      html += `
                          <tr>
                            <td>`+item.cTaiKhoan+`</td>
                            <td>`+item.cMaKhachHang+`</td>
                            <td>`+item.nSoDuNoDau+`</td>
                            <td>`+item.nSoDuCoDau+`</td>
                            <td>`+item.dNgaySoDu+`</td>
                           
                              <td>
                                  <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item._id+`">Delete</button>
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
})

