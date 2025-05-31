-- Tạo cơ sở dữ liệu và sử dụng
CREATE DATABASE qlns; 
USE qlns; 

-- Bảng NhanVien
CREATE TABLE NhanVien (
    MaNhanVien INT PRIMARY KEY IDENTITY(1,1),
    HoTen NVARCHAR(100) NOT NULL,
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi NVARCHAR(255),
    SoDienThoai VARCHAR(20),
    Email NVARCHAR(100),
    MaPhongBan INT,
    ChucVu NVARCHAR(50),
    NgayVaoLam DATE
);

-- Bảng PhongBan
CREATE TABLE PhongBan (
    MaPhongBan INT PRIMARY KEY IDENTITY(1,1),
    TenPhongBan NVARCHAR(100) NOT NULL,
    MoTa NVARCHAR(255),
    TruongPhong INT,
    FOREIGN KEY (TruongPhong) REFERENCES NhanVien(MaNhanVien)
);

-- Bổ sung khóa ngoại từ NhanVien đến PhongBan
ALTER TABLE NhanVien
ADD FOREIGN KEY (MaPhongBan) REFERENCES PhongBan(MaPhongBan);

-- Bảng ChamCong
CREATE TABLE ChamCong (
    MaChamCong INT PRIMARY KEY IDENTITY(1,1),
    MaNhanVien INT,
    Ngay DATE,
    GioVao TIME,
    GioRa TIME,
    TrangThai NVARCHAR(50) NULL,
    FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien)
);

-- Bảng Luong
CREATE TABLE Luong (
    MaLuong INT PRIMARY KEY IDENTITY(1,1),
    MaNhanVien INT,
    Thang INT,
    Nam INT,
    LuongCoBan DECIMAL(10,2),
    PhuCap DECIMAL(10,2),
    KhauTru DECIMAL(10,2),
    LuongThucNhan DECIMAL(10,2),
    FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien)
);

-- Bảng DanhGia
CREATE TABLE DanhGia (
    MaDanhGia INT PRIMARY KEY IDENTITY(1,1),
    MaNhanVien INT,
    KyDanhGia VARCHAR(20),
    DiemSo INT,
    NhanXet NVARCHAR(255),
    Thang INT,
    Nam INT,
    XepLoai NVARCHAR(10),
    FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien)
);

-- Bảng HopDong
CREATE TABLE HopDong (
    MaHopDong INT IDENTITY(1,1) PRIMARY KEY,
    MaNhanVien INT NOT NULL,
    LoaiHopDong NVARCHAR(100),
    NgayBatDau DATE NOT NULL,
    NgayKetThuc DATE,
    LuongCoBan DECIMAL(10,2),
    PhuCap DECIMAL(10,2),
    TrangThai NVARCHAR(50) DEFAULT 'Đang hiệu lực',
    FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien)
);

-- Bảng DonNghiPhep
CREATE TABLE DonNghiPhep (
    MaDon INT IDENTITY(1,1) PRIMARY KEY,
    MaNhanVien INT NOT NULL,
    NgayBatDau DATE NOT NULL,
    NgayKetThuc DATE NOT NULL,
    LyDo NVARCHAR(255),
    TrangThai NVARCHAR(50) DEFAULT 'Chờ duyệt',
    FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(MaNhanVien)
);

-- Chèn dữ liệu vào PhongBan
INSERT INTO PhongBan (TenPhongBan, MoTa, TruongPhong)
VALUES 
('Phòng Kỹ Thuật', 'Quản lý kỹ thuật', NULL),
('Phòng Nhân Sự', 'Quản lý nhân sự', NULL),
('Phòng Kinh Doanh', 'Phát triển kinh doanh', NULL);

-- Chèn dữ liệu vào NhanVien
INSERT INTO NhanVien (HoTen, NgaySinh, GioiTinh, DiaChi, SoDienThoai, Email, MaPhongBan, ChucVu, NgayVaoLam)
VALUES 
(N'Nguyễn Văn A', '1985-05-15', 'Nam', '123 Đường ABC, Quận XYZ', '0987654321', 'nguyenvana@example.com', 1, 'Kỹ sư phần mềm', '2021-01-01'),
('Trần Thị B', '1990-07-20', 'Nữ', '456 Đường DEF, Quận ABC', '0976543210', 'tranthib@example.com', 2, 'Nhân viên tuyển dụng', '2021-02-15');
-- Chèn dữ liệu vào ChamCong
INSERT INTO ChamCong (MaNhanVien, Ngay, GioVao, GioRa)
VALUES 
(1, '2023-11-01', '08:00:00', '17:00:00'),
(2, '2023-11-01', '08:30:00', '17:30:00');

-- Chèn dữ liệu vào Luong
INSERT INTO Luong (MaNhanVien, Thang, Nam, LuongCoBan, PhuCap, KhauTru, LuongThucNhan)
VALUES 
(1, 11, 2023, 10000000, 2000000, 500000, 11500000),
(2, 11, 2023, 9000000, 1500000, 400000, 10100000);

-- Chèn dữ liệu vào DanhGia
INSERT INTO DanhGia (MaNhanVien, KyDanhGia, DiemSo, NhanXet)
VALUES 
(1, 'Quý 4 2023', 90, 'Hoàn thành tốt công việc'),
(2, 'Quý 4 2023', 85, 'Năng động, tích cực');

-- Chèn dữ liệu vào HopDong
INSERT INTO HopDong (MaNhanVien, LoaiHopDong, NgayBatDau, NgayKetThuc, LuongCoBan, PhuCap, TrangThai)
VALUES 
(1, 'Hợp đồng lao động 1 năm', '2024-01-01', '2024-12-31', 10000000, 2000000, 'Đang hiệu lực'),
(2, 'Hợp đồng thử việc', '2024-02-01', '2024-04-30', 7000000, 1000000, 'Đang hiệu lực');

-- Chèn dữ liệu vào DonNghiPhep
INSERT INTO DonNghiPhep (MaNhanVien, NgayBatDau, NgayKetThuc, LyDo, TrangThai)
VALUES 
(1, '2024-03-10', '2024-03-12', 'Nghỉ ốm', 'Đã duyệt'),
(2, '2024-04-15', '2024-04-20', 'Về quê có việc gia đình', 'Chờ duyệt');

-- Kiểm tra dữ liệu đã chèn
SELECT * FROM NhanVien;
SELECT * FROM Luong;
SELECT * FROM HopDong;
SELECT * FROM DonNghiPhep;

-- Sửa kiểu dữ liệu các trường chứa tiếng Việt sang NVARCHAR
ALTER TABLE NhanVien ALTER COLUMN HoTen NVARCHAR(100);
ALTER TABLE NhanVien ALTER COLUMN DiaChi NVARCHAR(255);
ALTER TABLE NhanVien ALTER COLUMN ChucVu NVARCHAR(50);
ALTER TABLE NhanVien ALTER COLUMN Email NVARCHAR(100);

ALTER TABLE PhongBan ALTER COLUMN TenPhongBan NVARCHAR(100);
ALTER TABLE PhongBan ALTER COLUMN MoTa NVARCHAR(255);

ALTER TABLE DonNghiPhep ALTER COLUMN LyDo NVARCHAR(255);
ALTER TABLE DonNghiPhep ALTER COLUMN TrangThai NVARCHAR(50);

ALTER TABLE HopDong ALTER COLUMN LoaiHopDong NVARCHAR(100);
ALTER TABLE HopDong ALTER COLUMN TrangThai NVARCHAR(50);

ALTER TABLE DanhGia ALTER COLUMN NhanXet NVARCHAR(255);
ALTER TABLE DanhGia ALTER COLUMN XepLoai NVARCHAR(10);

SELECT * FROM sys.default_constraints WHERE parent_object_id = OBJECT_ID('DonNghiPhep');