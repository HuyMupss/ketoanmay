BEGIN TRY

BEGIN TRAN;

-- RedefineTables
BEGIN TRANSACTION;
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'tTempPhieuNhapHangHoaChiTiet'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_tTempPhieuNhapHangHoaChiTiet] (
    [cMaChungTu] NVARCHAR(20) NOT NULL,
    [nMaSo] INT NOT NULL IDENTITY(1,1),
    [cMaHang] NVARCHAR(10) NOT NULL,
    [cDonViTinh] NVARCHAR(10),
    [nSoLuong] FLOAT(53),
    [nDonGia] FLOAT(53),
    [nThanhTien] FLOAT(53),
    CONSTRAINT [PK__tTempPhi__9B1A8F8BE7CDA8FB] PRIMARY KEY CLUSTERED ([nMaSo])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_tTempPhieuNhapHangHoaChiTiet] ON;
IF EXISTS(SELECT * FROM [dbo].[tTempPhieuNhapHangHoaChiTiet])
    EXEC('INSERT INTO [dbo].[_prisma_new_tTempPhieuNhapHangHoaChiTiet] ([cDonViTinh],[cMaChungTu],[cMaHang],[nDonGia],[nMaSo],[nSoLuong],[nThanhTien]) SELECT [cDonViTinh],[cMaChungTu],[cMaHang],[nDonGia],[nMaSo],[nSoLuong],[nThanhTien] FROM [dbo].[tTempPhieuNhapHangHoaChiTiet] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_tTempPhieuNhapHangHoaChiTiet] OFF;
DROP TABLE [dbo].[tTempPhieuNhapHangHoaChiTiet];
EXEC SP_RENAME N'dbo._prisma_new_tTempPhieuNhapHangHoaChiTiet', N'tTempPhieuNhapHangHoaChiTiet';
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'tChungTuGhiSoChiTiet'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_tChungTuGhiSoChiTiet] (
    [cMaChungTu] NVARCHAR(20) NOT NULL,
    [nMaSo] INT NOT NULL IDENTITY(1,1),
    [cDienGiaiChiTiet] NVARCHAR(50),
    [nSoTien] FLOAT(53),
    [cTaiKhoanNo] NVARCHAR(20),
    [cTaiKhoanCo] NVARCHAR(20),
    CONSTRAINT [PK__tChungTu__9B1A8F8B0CFAAE93] PRIMARY KEY CLUSTERED ([nMaSo])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_tChungTuGhiSoChiTiet] ON;
IF EXISTS(SELECT * FROM [dbo].[tChungTuGhiSoChiTiet])
    EXEC('INSERT INTO [dbo].[_prisma_new_tChungTuGhiSoChiTiet] ([cDienGiaiChiTiet],[cMaChungTu],[cTaiKhoanCo],[cTaiKhoanNo],[nMaSo],[nSoTien]) SELECT [cDienGiaiChiTiet],[cMaChungTu],[cTaiKhoanCo],[cTaiKhoanNo],[nMaSo],[nSoTien] FROM [dbo].[tChungTuGhiSoChiTiet] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_tChungTuGhiSoChiTiet] OFF;
DROP TABLE [dbo].[tChungTuGhiSoChiTiet];
EXEC SP_RENAME N'dbo._prisma_new_tChungTuGhiSoChiTiet', N'tChungTuGhiSoChiTiet';
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'tChungTuNganHangChiTiet'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_tChungTuNganHangChiTiet] (
    [cMaChungTu] NVARCHAR(20) NOT NULL,
    [nMaSo] INT NOT NULL IDENTITY(1,1),
    [cDienGiaiChiTiet] NVARCHAR(50),
    [nSoTien] FLOAT(53),
    [cTaiKhoanNo] NVARCHAR(20),
    [cTaiKhoanCo] NVARCHAR(20),
    CONSTRAINT [PK__tChungTu__9B1A8F8BDFF43EAC] PRIMARY KEY CLUSTERED ([nMaSo])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_tChungTuNganHangChiTiet] ON;
IF EXISTS(SELECT * FROM [dbo].[tChungTuNganHangChiTiet])
    EXEC('INSERT INTO [dbo].[_prisma_new_tChungTuNganHangChiTiet] ([cDienGiaiChiTiet],[cMaChungTu],[cTaiKhoanCo],[cTaiKhoanNo],[nMaSo],[nSoTien]) SELECT [cDienGiaiChiTiet],[cMaChungTu],[cTaiKhoanCo],[cTaiKhoanNo],[nMaSo],[nSoTien] FROM [dbo].[tChungTuNganHangChiTiet] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_tChungTuNganHangChiTiet] OFF;
DROP TABLE [dbo].[tChungTuNganHangChiTiet];
EXEC SP_RENAME N'dbo._prisma_new_tChungTuNganHangChiTiet', N'tChungTuNganHangChiTiet';
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'tPhieuNhapHangHoaChiTiet'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_tPhieuNhapHangHoaChiTiet] (
    [cMaChungTu] NVARCHAR(20) NOT NULL,
    [nMaSo] INT NOT NULL IDENTITY(1,1),
    [cMaHang] NVARCHAR(8) NOT NULL,
    [cDonViTinh] NVARCHAR(10),
    [nSoLuong] FLOAT(53),
    [nDonGia] FLOAT(53),
    [nThanhTien] FLOAT(53),
    CONSTRAINT [PK__tPhieuNh__9B1A8F8BDE864C56] PRIMARY KEY CLUSTERED ([nMaSo])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_tPhieuNhapHangHoaChiTiet] ON;
IF EXISTS(SELECT * FROM [dbo].[tPhieuNhapHangHoaChiTiet])
    EXEC('INSERT INTO [dbo].[_prisma_new_tPhieuNhapHangHoaChiTiet] ([cDonViTinh],[cMaChungTu],[cMaHang],[nDonGia],[nMaSo],[nSoLuong],[nThanhTien]) SELECT [cDonViTinh],[cMaChungTu],[cMaHang],[nDonGia],[nMaSo],[nSoLuong],[nThanhTien] FROM [dbo].[tPhieuNhapHangHoaChiTiet] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_tPhieuNhapHangHoaChiTiet] OFF;
DROP TABLE [dbo].[tPhieuNhapHangHoaChiTiet];
EXEC SP_RENAME N'dbo._prisma_new_tPhieuNhapHangHoaChiTiet', N'tPhieuNhapHangHoaChiTiet';
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'tPhieuNhapHangTraLaiChiTiet'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_tPhieuNhapHangTraLaiChiTiet] (
    [cMaChungTu] NVARCHAR(20) NOT NULL,
    [nMaSo] INT NOT NULL IDENTITY(1,1),
    [cMaHang] NVARCHAR(8) NOT NULL,
    [cDonViTinh] NVARCHAR(10),
    [nSoLuong] FLOAT(53),
    [nDonGiaVon] FLOAT(53),
    [nThanhTienGiaVon] FLOAT(53),
    [nDonGiaBan] FLOAT(53),
    [nThanhTienGiaBan] FLOAT(53),
    CONSTRAINT [PK__tPhieuNh__9B1A8F8B2006A51E] PRIMARY KEY CLUSTERED ([nMaSo])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_tPhieuNhapHangTraLaiChiTiet] ON;
IF EXISTS(SELECT * FROM [dbo].[tPhieuNhapHangTraLaiChiTiet])
    EXEC('INSERT INTO [dbo].[_prisma_new_tPhieuNhapHangTraLaiChiTiet] ([cDonViTinh],[cMaChungTu],[cMaHang],[nDonGiaBan],[nDonGiaVon],[nMaSo],[nSoLuong],[nThanhTienGiaBan],[nThanhTienGiaVon]) SELECT [cDonViTinh],[cMaChungTu],[cMaHang],[nDonGiaBan],[nDonGiaVon],[nMaSo],[nSoLuong],[nThanhTienGiaBan],[nThanhTienGiaVon] FROM [dbo].[tPhieuNhapHangTraLaiChiTiet] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_tPhieuNhapHangTraLaiChiTiet] OFF;
DROP TABLE [dbo].[tPhieuNhapHangTraLaiChiTiet];
EXEC SP_RENAME N'dbo._prisma_new_tPhieuNhapHangTraLaiChiTiet', N'tPhieuNhapHangTraLaiChiTiet';
COMMIT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
