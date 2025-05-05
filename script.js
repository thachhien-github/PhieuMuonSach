document.getElementById("thuchien").addEventListener("click", function () {
  const hoten = document.getElementById("hoten").value.trim();
  const gioitinh = document.querySelector(
    'input[name="gioitinh"]:checked'
  ).value;
  const ngaymuon = document.getElementById("ngaymuon").value.trim();
  const socccd = document.getElementById("socccd").value.trim();
  const Khoa = document.getElementById("cbokhoa").value;
  const songay = document.getElementById("songay").value.trim();

  // Kiểm tra họ và tên
  if (!hoten) {
    document.getElementById("ketqua").innerHTML =
      "<span class='error'>Họ và tên không được để trống.</span>";
    return;
  }

  // Kiểm tra ngày mượn
  const formattedDate = formatDate(ngaymuon);
  if (!formattedDate || !validateDate(formattedDate)) {
    document.getElementById("ketqua").innerHTML =
      "<span class='error'>Ngày mượn không hợp lệ. Vui lòng nhập theo định dạng dd/mm/yyyy.</span>";
    return;
  }

  // Kiểm tra số CCCD
  if (!socccd) {
    document.getElementById("ketqua").innerHTML =
      "<span class='error'>Số CCCD không được để trống.</span>";
    return;
  }

  // Kiểm tra số ngày mượn
  if (!songay) {
    document.getElementById("ketqua").innerHTML =
      "<span class='error'>Số ngày không được để trống.</span>";
    return;
  }

  // Kiểm tra khoa
  if (!Khoa) {
    document.getElementById("ketqua").innerHTML =
      "<span class='error'>Khoa không được để trống.</span>";
    return;
  }

  // Hiển thị kết quả nếu tất cả hợp lệ
  document.getElementById("ketqua").textContent = `
  Đăng ký thành công!
  Họ và tên: ${hoten}
  Giới tính: ${gioitinh}
  Ngày mượn: ${formattedDateString}
  Số CCCD: ${socccd}
  Khoa: ${Khoa}
  Số ngày: ${songay}
`;
});
