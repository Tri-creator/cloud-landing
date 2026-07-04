import type { RequiredDataFromCollectionSlug } from 'payload'

// Cloud Camera landing page static seed – shown before DB is seeded
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'none',
    richText: undefined,
  },
  meta: {
    description: ' VCV Cloud Camera an ninh đám mây chuyên nghiệp với khả năng phát hiện bằng trí tuệ nhân tạo, lưu trữ đám mây 24/7 và cảnh báo di động theo thời gian thực.',
    title: 'VCV Cloud Camera – Bảo mật thông minh hơn, luôn hoạt động.',
  },
  title: 'Home',
  layout: [
    // Hero Banner
    {
      blockType: 'heroBanner',
      badge: '🚀 Giới thiệu VCV Cloud Camera 2.0',
      heading: 'Quan sát mọi thứ. Không bỏ sót điều gì.',
      subheading:
        'Camera an ninh đám mây chuyên nghiệp với tính năng phát hiện người và phương tiện bằng trí tuệ nhân tạo, dung lượng lưu trữ đám mây không giới hạn và cảnh báo tức thì trên điện thoại di động — tất cả được quản lý từ một bảng điều khiển duy nhất.',
      primaryCTA: { label: 'Shop Now', href: '#why-vcv' },
      secondaryCTA: { label: 'Watch Demo', href: '/demo' },
      stats: [
        { value: '10M+', label: 'Camera đã bán' },
        { value: '99.9%', label: 'Cam kết Mức dịch vụ về thời gian hoạt động' },
        { value: '4K', label: 'Ultra HD' },
        { value: '24/7', label: 'Lưu trữ đám mây' },
      ],
    },
    // Features
    {
      blockType: 'features',
      badge: 'GIẢI PHÁP',
      heading: 'Xây dựng phù hợp với lối sống và công việc của bạn.',
      subheading:
        'Mọi tính năng đều được thiết kế để mang lại cho bạn sự an tâm tuyệt đối — dù bạn đang ở nhà, ở phòng văn phòng hay ở bất cứ đâu trên thế giới.',
      features: [
        {
          icon: 'ai',
          title: 'Phát hiện thông minh AI',
          description:
            'Phân biệt giữa người, phương tiện, động vật và bưu kiện — loại bỏ báo động giả và giúp bạn tập trung vào những điều quan trọng.',
        },
        {
          icon: 'cloud',
          title: 'Lưu trữ đám mây không giới hạn',
          description:
            'Tất cả dữ liệu đều được mã hóa và tự động sao lưu lên đám mây. Bạn có thể truy cập bất kỳ đoạn video nào từ bất kỳ thiết bị nào, bất cứ lúc nào.',
        },
        {
          icon: 'shield',
          title: 'Mã hóa cấp độ ngân hàng',
          description:
            'Mã hóa AES-256 khi dữ liệu được lưu trữ và TLS 1.3 khi truyền tải đảm bảo hình ảnh của bạn luôn được bảo mật và an toàn.',
        },
        {
          icon: 'mobile',
          title: 'Xem trực tiếp trên thiết bị di động',
          description:
            'Xem trực tiếp các luồng video HD từ tất cả các camera cùng lúc trên điện thoại thông minh hoặc máy tính bảng của bạn với ứng dụng miễn phí của chúng tôi.',
        },
        {
          icon: 'moon',
          title: 'Màu nhìn ban đêm',
          description:
            'Ghi lại hình ảnh đầy đủ màu sắc ngay cả trong điều kiện tối đen như mực nhờ công nghệ cảm biến IR + Starlight tiên tiến của chúng tôi.',
        },
        {
          icon: 'bell',
          title: 'Cảnh báo đẩy tức thì',
          description:
            'Nhận thông báo chỉ trong vài giây sau khi phát hiện bất kỳ sự kiện nào. Tùy chỉnh vùng cảnh báo và lịch trình cho phù hợp với nhu cầu của bạn.',
        },
        {
          icon: 'audio',
          title: 'Âm thanh hai chiều',
          description:
            'Tích hợp micro và loa cho phép bạn nghe và nói chuyện với khách đến nhà, người giao hàng hoặc kẻ đột nhập trong thời gian thực.',
        },
        {
          icon: 'zap',
          title: 'Thiết lập dễ dàng trong 3 phút',
          description:
            'Không cần kỹ thuật viên. Chỉ cần cắm điện, kết nối Wi-Fi và bạn có thể sử dụng ngay trong vòng chưa đầy 3 phút với hướng dẫn sử dụng trên ứng dụng của chúng tôi.',
        },
      ],
    },
    // Products
    // Pricing
   {
  blockType: 'pricing',
  badge: 'GÓI DỊCH VỤ',
  heading: 'GÓI DỊCH VỤ LƯU TRỮ',
  subheading: '',
  plans: [
    {
      billingType: 'day',
      name: 'Lưu trữ 3 ngày',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: true,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong vòng 3 ngày', included: true },
        { text: 'Chuẩn hình ảnh: SF-480P / 720P / 1080P', included: true },
      ],
    },
    {
      billingType: 'day',
      name: 'Lưu trữ 7 ngày',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: false,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong vòng 7 ngày', included: true },
        { text: 'Chuẩn hình ảnh: SF-480P / 720P / 1080P', included: true },
      ],
    },
    {
      billingType: 'day',
      name: 'Lưu trữ 15 ngày',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: false,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong vòng 15 ngày', included: true },
        { text: 'Chuẩn hình ảnh: SF-480P / 720P / 1080P', included: true },
      ],
    },
    {
      billingType: 'day',
      name: 'Lưu trữ 30 ngày',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: false,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong vòng 30 ngày', included: true },
        { text: 'Chuẩn hình ảnh: SF-460P / 720P / 1080P', included: true },
      ],
    },
    {
      billingType: 'day',
      name: 'Lưu trữ 60 ngày',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: false,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong vòng 60 ngày', included: true },
        { text: 'Chuẩn hình ảnh: SF-460P / 720P / 1080P', included: true },
      ],
    },

    {
      billingType: 'storage',
      name: '100GB',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: true,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong 100GB', included: true },
        { text: 'Chuẩn hình ảnh: SF-480P / 720P / 1080P', included: true },
      ],
    },
    {
      billingType: 'storage',
      name: '300GB',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: false,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong 300GB', included: true },
        { text: 'Chuẩn hình ảnh: SF-480P / 720P / 1080P', included: true },
      ],
    },
    {
      billingType: 'storage',
      name: '1TB',
      description: '',
      price: 0,
      annualPrice: 0,
      highlighted: false,
      ctaLabel: 'Liên hệ bán hàng',
      ctaHref: '#contact',
      features: [
        { text: '(Ghi đè dữ liệu)', included: true },
        { text: 'Chu kỳ gói cước: 30 ngày', included: true },
        { text: 'Xem lại dữ liệu ghi hình trong 1TB', included: true },
        { text: 'Chuẩn hình ảnh: SF-480P / 720P / 1080P', included: true },
      ],
    },
  ] as any,
},
    // Testimonials
    {
      blockType: 'testimonialsSection',
      badge: 'CẢM NHẬN KHÁCH HÀNG',
      heading: 'Được hàng triệu gia đình và doanh nghiệp tin dùng.',
      subheading: 'Đừng chỉ tin lời chúng tôi — hãy lắng nghe ý kiến ​​từ những khách hàng thực tế của VCV.',
      showAll: false,
      limit: 6,
    },
    // FAQ
    {
      blockType: 'faq',
      badge: 'CÂU HỎI ',
      heading: '',
      subheading: 'Tất cả những gì bạn cần biết về VCV Cloud Camera.',
      items: [
        {
          question: 'Ứng dụng VCV Cloud Camera có yêu cầu đăng ký thuê bao không?',
          answer:
            'Không cần đăng ký thuê bao để sử dụng camera của bạn — bạn sẽ nhận được 7 ngày lưu trữ đám mây miễn phí với gói Khởi đầu. Để có thời gian lưu trữ lâu hơn, các tính năng AI và nhiều camera hơn, các gói Chuyên nghiệp và Doanh nghiệp của chúng tôi có giá từ 9 đô la/tháng.',
        },
        {
          question: 'Thời gian lưu trữ video trên đám mây là bao lâu?',
          answer:
            'Gói Starter: 7 ngày, Pro: 30 ngày, Business: 90 ngày. Bạn cũng có thể tải xuống và lưu các đoạn video ngắn vào máy tính bất cứ lúc nào thông qua ứng dụng.',
        },
        {
          question: 'Video của tôi có được bảo mật và riêng tư không?',
          answer:
            'Chắc chắn rồi. Tất cả dữ liệu đều được mã hóa bằng AES-256 khi lưu trữ và TLS 1.3 khi truyền tải. Chỉ bạn mới có thể truy cập dữ liệu của mình — nhân viên VCV không thể xem được.',
        },
        {
          question: 'Tôi có thể xem camera của mình từ xa không?',
          answer:
            'Đúng vậy! Ứng dụng VCV miễn phí (iOS & Android) cho phép bạn xem phát trực tiếp, xem lại bản ghi và nhận thông báo từ bất cứ đâu trên thế giới.',
        },
        {
          question: 'Điều gì sẽ xảy ra nếu mạng internet của tôi bị gián đoạn?',
          answer:
            'Các camera của chúng tôi có hỗ trợ lưu trữ cục bộ (khe cắm thẻ SD) sẽ tiếp tục ghi hình cục bộ. Khi kết nối internet được thiết lập lại, đoạn phim sẽ tự động được đồng bộ hóa lên đám mây.',
        },
        {
          question: 'Việc thiết lập khó đến mức nào?',
          answer:
            'Hầu hết khách hàng có thể xem camera trực tiếp trong vòng chưa đầy 3 phút. Chỉ cần cắm điện, tải ứng dụng và làm theo hướng dẫn từng bước. Không cần khoan đục hay thợ điện đối với camera trong nhà.',
        },
      ],
    },
  ],
}
