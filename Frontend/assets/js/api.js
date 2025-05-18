const employees = [
    { MaNhanVien: 1, HoTen: "Nguyễn Văn A", NgaySinh: "1985-05-15", GioiTinh: "Nam", DiaChi: "123 Đường ABC", SoDienThoai: "0987654321", Email: "nguyenvana@example.com", MaPhongBan: 1, ChucVu: "Kỹ sư phần mềm", NgayVaoLam: "2021-01-01" },
    { MaNhanVien: 2, HoTen: "Trần Thị B", NgaySinh: "1990-07-20", GioiTinh: "Nữ", DiaChi: "456 Đường DEF", SoDienThoai: "0976543210", Email: "tranthib@example.com", MaPhongBan: 2, ChucVu: "Nhân viên tuyển dụng", NgayVaoLam: "2021-02-15" }
];

const departments = [
    { MaPhongBan: 1, TenPhongBan: "Phòng Kỹ Thuật", MoTa: "Quản lý kỹ thuật", TruongPhong: null },
    { MaPhongBan: 2, TenPhongBan: "Phòng Nhân Sự", MoTa: "Quản lý nhân sự", TruongPhong: null },
    { MaPhongBan: 3, TenPhongBan: "Phòng Kinh Doanh", MoTa: "Phát triển kinh doanh", TruongPhong: null }
];

const attendance = [
    { MaChamCong: 1, MaNhanVien: 1, Ngay: "2023-11-01", GioVao: "08:00:00", GioRa: "17:00:00" },
    { MaChamCong: 2, MaNhanVien: 2, Ngay: "2023-11-01", GioVao: "08:30:00", GioRa: "17:30:00" }
];

const payroll = [
    { MaLuong: 1, MaNhanVien: 1, Thang: 11, Nam: 2023, LuongCoBan: 10000000, PhuCap: 2000000, KhauTru: 500000, LuongThucNhan: 11500000 },
    { MaLuong: 2, MaNhanVien: 2, Thang: 11, Nam: 2023, LuongCoBan: 9000000, PhuCap: 1500000, KhauTru: 400000, LuongThucNhan: 10100000 }
];

const evaluation = [
    { MaDanhGia: 1, MaNhanVien: 1, KyDanhGia: "Quý 4 2023", DiemSo: 90, NhanXet: "Hoàn thành tốt công việc" },
    { MaDanhGia: 2, MaNhanVien: 2, KyDanhGia: "Quý 4 2023", DiemSo: 85, NhanXet: "Năng động, tích cực" }
];

const contracts = [
    { MaHopDong: 1, MaNhanVien: 1, LoaiHopDong: "Hợp đồng lao động 1 năm", NgayBatDau: "2024-01-01", NgayKetThuc: "2024-12-31", LuongCoBan: 10000000, PhuCap: 2000000, TrangThai: "Đang hiệu lực" },
    { MaHopDong: 2, MaNhanVien: 2, LoaiHopDong: "Hợp đồng thử việc", NgayBatDau: "2024-02-01", NgayKetThuc: "2024-04-30", LuongCoBan: 7000000, PhuCap: 1000000, TrangThai: "Đang hiệu lực" }
];

const leave = [
    { MaDon: 1, MaNhanVien: 1, NgayBatDau: "2024-03-10", NgayKetThuc: "2024-03-12", LyDo: "Nghỉ ốm", TrangThai: "Đã duyệt" },
    { MaDon: 2, MaNhanVien: 2, NgayBatDau: "2024-04-15", NgayKetThuc: "2024-04-20", LyDo: "Về quê có việc gia đình", TrangThai: "Chờ duyệt" }
];

export async function getEmployees(search = '') {
    if (search) {
        return employees.filter(emp => emp.HoTen.toLowerCase().includes(search.toLowerCase()));
    }
    return employees;
}

export async function getDepartments(search = '') {
    if (search) {
        return departments.filter(dep => dep.TenPhongBan.toLowerCase().includes(search.toLowerCase()));
    }
    return departments;
}

export async function getAttendance(search = '') {
    if (search) {
        return attendance.filter(rec => rec.MaNhanVien.toString().includes(search));
    }
    return attendance;
}

export async function getPayroll(search = '') {
    if (search) {
        return payroll.filter(rec => rec.MaNhanVien.toString().includes(search));
    }
    return payroll;
}

export async function getEvaluations(search = '') {
    if (search) {
        return evaluation.filter(rec => rec.MaNhanVien.toString().includes(search));
    }
    return evaluation;
}

export async function getContracts(search = '') {
    if (search) {
        return contracts.filter(rec => rec.MaNhanVien.toString().includes(search));
    }
    return contracts;
}

export async function getLeaveRequests(search = '') {
    if (search) {
        return leave.filter(rec => rec.MaNhanVien.toString().includes(search));
    }
    return leave;
}

export async function addEmployee(employee) {
    employees.push({ MaNhanVien: employees.length + 1, ...employee });
    return employee;
}

export async function updateEmployee(id, employee) {
    const index = employees.findIndex(emp => emp.MaNhanVien === id);
    if (index !== -1) employees[index] = { MaNhanVien: id, ...employee };
    return employee;
}

export async function addDepartment(department) {
    departments.push({ MaPhongBan: departments.length + 1, ...department });
    return department;
}

export async function updateDepartment(id, department) {
    const index = departments.findIndex(dep => dep.MaPhongBan === id);
    if (index !== -1) departments[index] = { MaPhongBan: id, ...department };
    return department;
}

export async function addAttendance(record) {
    attendance.push({ MaChamCong: attendance.length + 1, ...record });
    return record;
}

export async function updateAttendance(id, record) {
    const index = attendance.findIndex(rec => rec.MaChamCong === id);
    if (index !== -1) attendance[index] = { MaChamCong: id, ...record };
    return record;
}

export async function addPayroll(record) {
    payroll.push({ MaLuong: payroll.length + 1, ...record });
    return record;
}

export async function updatePayroll(id, record) {
    const index = payroll.findIndex(rec => rec.MaLuong === id);
    if (index !== -1) payroll[index] = { MaLuong: id, ...record };
    return record;
}

export async function addEvaluation(record) {
    evaluation.push({ MaDanhGia: evaluation.length + 1, ...record });
    return record;
}

export async function updateEvaluation(id, record) {
    const index = evaluation.findIndex(rec => rec.MaDanhGia === id);
    if (index !== -1) evaluation[index] = { MaDanhGia: id, ...record };
    return record;
}

export async function addContract(contract) {
    contracts.push({ MaHopDong: contracts.length + 1, ...contract });
    return contract;
}

export async function updateContract(id, contract) {
    const index = contracts.findIndex(c => c.MaHopDong === id);
    if (index !== -1) contracts[index] = { MaHopDong: id, ...contract };
    return contract;
}

export async function addLeaveRequest(request) {
    leave.push({ MaDon: leave.length + 1, ...request });
    return request;
}

export async function updateLeaveRequest(id, request) {
    const index = leave.findIndex(req => req.MaDon === id);
    if (index !== -1) leave[index] = { MaDon: id, ...request };
    return request;
}