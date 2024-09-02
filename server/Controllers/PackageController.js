const Package = require("../Models/Package");

const PackageController = {
  CreatePackage: async(req, res) => {
    try{
        const {
            packageName,
            packageDesc,
            dataPackage,
            freeData,
            standedData,
            packagePrice,
            packageFor
        } = req.body

        const checkPck = await Package.findOne({ PackageName:packageName })

        if(checkPck){
            return res.json({ Error: "This Package is Already in System"})
        }
        else{
            const NewPackage = new Package({
                PackageName: packageName,
                pkData: dataPackage,
                pkDesc: packageDesc,
                pkFreeData: freeData,
                pkStadndedData: standedData,
                pkPrice: packagePrice,
                pkFor: packageFor
            })

            const resultPackage = await NewPackage.save()
            res.json({ Status: "Success"})
        }
    }
    catch(err) {
        console.log(err)
    }
  }
};

module.exports = PackageController;