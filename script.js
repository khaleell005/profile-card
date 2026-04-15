    (function () {
      const timeEl     = document.querySelector('[data-testid="test-user-time"]');
      const liveEl     = document.getElementById('time-live');
      const announceBtn = document.getElementById('announce-btn');

      // Silently update the visible clock every second (no SR spam)
      function tick() { timeEl.textContent = Date.now(); }
      tick();
      setInterval(tick, 1000);

      // On-demand: inject current time into the live region so screen readers
      // announce it once, only when the user explicitly requests it.
      announceBtn.addEventListener('click', function () {
        liveEl.textContent = '';   // reset so repeated clicks re-trigger
        requestAnimationFrame(function () {
          liveEl.textContent = 'Current epoch time: ' + Date.now() + ' milliseconds';
        });
      });
    })();