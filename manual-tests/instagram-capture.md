# Manual test: Instagram capture
1. Build and load `dist/extension` as an unpacked Chrome extension.
2. Log in to Instagram in the browser; do not enter credentials into the extension.
3. Open a saved or liked post/reel permalink.
4. Click the extension and choose **Capture current page**.
5. Expected: popup total increases, exported JSON contains platform `instagram`, signal `save` or manual fallback, creator handle when visible, caption if visible, and warnings when fragile selectors fail.
