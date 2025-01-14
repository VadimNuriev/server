const Router = require('express');
const fileController = require('../controllers/fileController');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();
//определяем Router

router.post('', authMiddleware, fileController.createDir);
router.post('/upload', authMiddleware, fileController.uploadFile);
router.post('/avatar', authMiddleware, fileController.uploadAvatar);
router.get('', authMiddleware, fileController.getFiles);
router.get('/download', authMiddleware, fileController.downloadFile);
router.get('/search', authMiddleware, fileController.searchFile);
router.delete('/', authMiddleware, fileController.deleteFile);
router.delete('/avatar', authMiddleware, fileController.deleteAvatar);
// определяем маршруты и их обработчики внутри роутера
module.exports = router;
// После определения всех маршрутов выполняем их экспорт.