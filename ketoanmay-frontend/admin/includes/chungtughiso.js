//replace
function  replaceslash(inputstring){
    const replacestring =inputstring.replace(/\//g, '-')
    return replacestring;
 
   
}

$(document).ready(function () {
  load_data();
  function load_data() {
      $.ajax({
          method: "GET",
          dataType: "json",
          url: "http://localhost:3001/chungtughiso",
          success: function (data){
              var html = '';
              if(data.length > 0)
              {
                  data.forEach(item => {
                    
                      html += `
                          <tr>
                              <td>`+item.cMaChungTu+`</td>
                              <td>`+item.cLoaiChungTu+`$</td>
                              <td>`+item.cSoChungTu+`</td>
                              <td>`+item.dNgayChungTu+`</td>
                              <td>`+item.cHoTen+`</td>
                              <td>`+item.cMaKhachHangNo+`</td>
                              <td>`+item.cTenKhachHangNo+`</td>
                              <td>`+item.cMaSoThueNo+`</td>
                              <td>`+item.cMaKhachHangCo+`</td>
                              <td>`+item.cTenKhachHangCo+`</td>
                              <td>`+item.cMaSoThueCo+`</td>
                              <td>`+item.cDienGiai+`</td>
                              <td>`+item.cBieuThue+`</td>
                              <td>`+item.cSoSeRi+`</td>
                              <td>`+item.cSoHoaDon+`</td>
                              <td>`+item.dNgayHoaDon+`</td>
                              <td>`+item.nThueSuat+`</td>
                              <td>`+item.nThueGTGT+`</td>
                              <td>`+item.cMatHang+`</td>
                              <td>
                                  <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item.cMaChungTu+`">Delete</button>
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
 


//   deletebuttuon
        $(document).on('click', '.delete', function(){
           var maChungTu = $(this).data('id');
            const cMaChungTu   = replaceslash(maChungTu);
            console.log(cMaChungTu);
            if(confirm("Are you sure you want to delete this data?"))
            {
                $.ajax({
                    url:"http://localhost:3001/chungtughiso/deletedchungtughiso/"+cMaChungTu,
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




