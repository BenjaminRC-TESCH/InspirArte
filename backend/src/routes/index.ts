import { Router } from 'express';
import upload from '../libs/multer';
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto, searchPhotos, getUserPhotos } from '../controllers/photo.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { login, register } from '../controllers/auth.controller';
import { reactToPhoto } from '../controllers/photo.controller';

const router = Router();

router.post('/login', login);
router.post('/register', register);

router.use(upload.single('image'));

router.route('/photos')
    .get(getPhotos)  
    .post(verifyToken, createPhoto);

router.get('/photos/user/:userId', getUserPhotos);

router.route('/photos/:id')
    .get(getPhoto)
    .delete(verifyToken, deletePhoto)
    .put(verifyToken, updatePhoto);

router.route('/photosview/:id')
    .get(getPhoto)
    

router.get('/photos/search/:query', searchPhotos);

router.post('/photos/:id/react', reactToPhoto);//Modificar para las reacciones


export default router;