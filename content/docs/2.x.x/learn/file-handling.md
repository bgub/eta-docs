---
id: file-handling
title: How does Eta resolve template files?
---

What happens when you call `renderFile(path, ...)` or `<%~ includeFile(path, ...) %>`?

1. If `path` is an absolute path:
   - First, look in `config.views`: if `config.views` is a path to a directory, look in it. If it is an array of directory paths, look in each
   - If Eta fails to find the template, look in `config.root` (by default `/`, the file-system base)
2. If `path` is a relative path:
   - If `includeFile()` was called from another template file, try to resolve the new template based on that template's file path
   - If that fails, fall back to searching `config.views`
