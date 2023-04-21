import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { userModel } from "../models/userDetails.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
const router = Router();

//post

router.post(
  "/post",
  expressAsyncHandler(async (req, res) => {
    try {
      const sendData = new userModel(req.body);
      const saveData = await userModel.create(sendData);
      res.send(saveData);
    } catch (error) {
      res.status(HTTP_BAD_REQUEST).send("Failed To Add Data to Database");
    }
  })
);

//getAll

router.get(
  "/getAllData",
  expressAsyncHandler(async (req, res) => {
    try {
      const getAlldta = await userModel.find();
      res.send(getAlldta);
    } catch (error) {
      res.status(HTTP_BAD_REQUEST).send("Failed To Fetch Data");
    }
  })
);

//getById

router.get(
  "/getById/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const reqId = req.params.id;
      const getDataId = await userModel.findOne({ _id: reqId });
      res.send(getDataId);
    } catch (error) {
      res.status(HTTP_BAD_REQUEST).send("Failed to Fetch Data By Id");
    }
  })
);

//Update Data By Id

router.put(
  "/update/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const reqId = req.params.id;
      const updateDataById = await userModel.findByIdAndUpdate(
        { _id: reqId },
        req.body,
        { new: true }
      );
      res.send(updateDataById);
    } catch (error) {
      res.status(HTTP_BAD_REQUEST).send("Failed To Data Update");
    }
  })
);

//Delete Data By Id

router.delete(
  "/delete/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const reqId = req.params.id;
      const deleteData = await userModel.findByIdAndDelete({ _id: reqId });
      res.send(deleteData);
    } catch (error) {
      res.status(HTTP_BAD_REQUEST).send("Failed To Delete Data");
    }
  })
);

export default router;
