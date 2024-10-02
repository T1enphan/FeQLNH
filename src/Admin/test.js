function Test(props) {
  return (
    <>
      <div className="row">
        <aside class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 text-red-500">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-sm">bash</p>
          </div>
          <div class="mt-4">
            <p class="text-green-400">
              Chào mừng bạn đến với trang quản lý admin của hệ thống bán hàng
              điện tử! Đây là một công cụ mạnh mẽ được thiết kế để giúp các quản
              trị viên dễ dàng theo dõi và quản lý các hoạt động kinh doanh trực
              tuyến. Trang admin cung cấp một giao diện thân thiện và trực quan,
              cho phép bạn thực hiện các tác vụ quản lý một cách hiệu quả và
              nhanh chóng.
            </p>
            <p class="text-white">
              Tính Năng Chính: Quản Lý Sản Phẩm: Bạn có thể thêm, chỉnh sửa hoặc
              xóa sản phẩm một cách dễ dàng. Các thông tin chi tiết về sản phẩm,
              bao gồm giá, hình ảnh và mô tả, có thể được cập nhật ngay lập tức.
              Theo Dõi Đơn Hàng: Hệ thống cho phép bạn theo dõi tình trạng đơn
              hàng, từ khi khách hàng đặt hàng cho đến khi đơn hàng được giao.
              Bạn có thể xem chi tiết đơn hàng và cập nhật trạng thái đơn hàng
              theo yêu cầu. Quản Lý Khách Hàng: Trang admin cung cấp thông tin
              chi tiết về khách hàng, giúp bạn hiểu rõ hơn về thói quen mua sắm
              của họ. Bạn có thể liên hệ trực tiếp với khách hàng để giải quyết
              các vấn đề phát sinh. Báo Cáo và Phân Tích: Hệ thống cung cấp các
              báo cáo và phân tích về doanh số, số lượng sản phẩm bán ra và
              lượng truy cập của người dùng. Những thông tin này giúp bạn đưa ra
              các quyết định chiến lược nhằm tăng trưởng kinh doanh. Quản Lý
              Người Dùng: Bạn có thể quản lý quyền truy cập và vai trò của các
              người dùng khác trong hệ thống, đảm bảo an toàn và bảo mật thông
              tin.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Test;
