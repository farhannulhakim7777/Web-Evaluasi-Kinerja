document.getElementById("penilaianForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData();

    formData.append("Timestamp", new Date().toLocaleString("id-ID"));
    formData.append("Pertanyaan 1", getFullAnswer(form.q1));
    formData.append("Pertanyaan 2", getFullAnswer(form.q2));
    formData.append("Pertanyaan 3", getFullAnswer(form.q3));
    formData.append("Pertanyaan 4", getFullAnswer(form.q4));
    formData.append("Pertanyaan 5", getFullAnswer(form.q5));
    formData.append("Pertanyaan 6", getFullAnswer(form.q6));
    formData.append("Pertanyaan 7", getFullAnswer(form.q7));


    fetch("https://script.google.com/macros/s/AKfycbyxUrahlXOlmAEciVTUiLQ-4Z3N-gIeYRuUkeM-gDXipuuYnPjOkrHwngpG_G_zcgaYdw/exec", {
        method: "POST",
        body: formData
        // ⛔️ JANGAN pakai headers kalau pakai FormData
    })
        .then(() => {
            alert("✅ Terima kasih! Jawaban Anda berhasil dikirim.");
            form.reset();
        })
        .catch(err => {
            console.error("❌ Gagal mengirim:", err);
            alert("⚠️ Gagal mengirim data. Silakan coba lagi.");
        });
});

function getFullAnswer(radioNodeList) {
    const checked = Array.from(radioNodeList).find(input => input.checked);
    if (!checked) return "";
    return checked.parentElement.textContent.trim();
}
