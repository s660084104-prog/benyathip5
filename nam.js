// เมื่อหน้าต่างโหลดเสร็จสิ้น (โหลดรูปและไฟล์ทั้งหมดครบ)
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    
    // เพิ่มความเนียนด้วยการค่อยๆ เลือนหาย (Fade out)
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    
    // รอให้ Transition จบแล้วค่อยเอา Element ออกจากหน้าจอ
    setTimeout(function() {
        loader.style.display = 'none';
    }, 500);
});

// เพิ่มลูกเล่นเปลี่ยนพื้นหลัง Hero อัตโนมัติ (Optional)
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.getElementById('hero-bg');
    if (hero) {
        // คุณสามารถเปลี่ยน URL รูปภาพตรงนี้ให้เป็นรูปสวยๆ ของคุณได้
        hero.style.backgroundImage = "url('https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=1920&q=80')";
        hero.style.backgroundPosition = 'center';
        hero.style.backgroundSize = 'cover';
    }
});