// Modal Management for Lifestyle Insights
document.addEventListener('DOMContentLoaded', function() {
    const insightsBtn = document.getElementById('insights-btn');
    const modal = document.getElementById('insights-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = modal.querySelector('.modal-backdrop');

    // Open modal
    function openInsightsModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Lazy load charts if not yet initialized
        if (window.initializeCharts && !window.chartsInitialized) {
            setTimeout(() => {
                window.initializeCharts();
            }, 100);
        }
    }

    // Close modal
    function closeInsightsModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    insightsBtn.addEventListener('click', openInsightsModal);
    modalClose.addEventListener('click', closeInsightsModal);
    modalBackdrop.addEventListener('click', closeInsightsModal);

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeInsightsModal();
        }
    });

    // Open with 'I' key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'i' && !modal.classList.contains('active') && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            openInsightsModal();
        }
    });

    // Prevent closing when clicking inside modal content
    modal.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
