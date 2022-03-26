import multer from 'multer';

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(req, 'photo');
    },
    filename: (req, file, cb)=>{
        const basename = path.basename(file.basename);
        const date = Date.now();
        cb(req, date+'_'+basename);
    }
})
const upload = multer({
    storage: storage
});

module.exports = upload;