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
  },

  AllPackages: async(req, res) => {
    try{
        const ViewPackages = await Package.find()
        return res.json({ Result: ViewPackages })
    }
    catch(err){
        console.log(err)
    }
  },


  OnePackage: async(req, res) => {
    try{
        const PackageID = req.params.id
        // console.log(PackageID)
        const PackageData = await Package.findOne({_id: PackageID })
        return res.json({ Result: PackageData })
    }
    catch(err){
        console.log(err)
    }
  },

  UpdatePackage: async (req, res) => {
    try{
        const PackageID = req.params.id
        const {
            packageDesc,
            packageData,
            packageFreeData,
            packageStandedData,
            packagePrice
        } = req.body

        const PackageUpdate = await Package.findByIdAndUpdate(
            PackageID,
            { 
               $set: {
                pkDesc: packageDesc,
                pkData: packageData,
                pkFreeData: packageFreeData,
                pkStadndedData: packageStandedData,
                pkPrice: packagePrice
               } 
            },
            { new: true })
        
        if(PackageUpdate){
            return res.json({ Status: "Success" })
        }
        else{
            return res.json({ Error: "Error"})
        }
        
    }
    catch(err){
        console.log(err)
    }
  }
};

module.exports = PackageController;