import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProfileModel from './profile.model.js';
import { getProfiles, getProfile, createProfile, deleteProfile, updatedProfile } from './profile.controller.js';

const router = Router();

router.get("/", expressAsyncHandler(getProfiles));

router.get("/:id", expressAsyncHandler(getProfile));

router.post("/", expressAsyncHandler(createProfile));

router.delete("/:id", expressAsyncHandler(deleteProfile));

router.put("/:id", expressAsyncHandler(updatedProfile));

export default router;