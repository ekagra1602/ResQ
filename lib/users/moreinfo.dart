import 'dart:async';
import 'dart:io';
import 'dart:ui';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:disaster_managment_sih/features/bottomNav/bottomNavBar.dart';
import 'package:geolocator/geolocator.dart';
import 'package:intl/intl.dart';
import 'package:disaster_managment_sih/features/SOS/sosService/service.dart';
import 'package:flutter/material.dart';
import 'package:multiple_images_picker/multiple_images_picker.dart';
import '../features/SOS/sosService/disasterModel.dart';
import '../features/home/widgets/customtextfield.dart';
import 'package:device_info/device_info.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:convert';
import 'package:geocoding/geocoding.dart';
import 'package:disaster_managment_sih/features/SOS/sosService/disasterModel.dart';
import 'package:http/http.dart' as http;

class MoreInfoOrg extends StatefulWidget {
  const MoreInfoOrg({super.key, required this.disasterType});
  final String disasterType;
  @override
  State<MoreInfoOrg> createState() => _MoreInfoOrgState();
}

String _selectedDisasterType = 'Earthquake';
late File pickedImageFile;
List<File> images = [];
final List<String> _disasterTypes = [
  'Earthquake',
  'Flood',
  'Wildfire',
  'Tornado',
  'Hurricane',
  'Volcano',
  'Industrial accident',
  'Terrorist attack',
  'Other',
];

class _MoreInfoOrgState extends State<MoreInfoOrg> {
  final TextEditingController detailsController = TextEditingController();
  final TextEditingController contactController = TextEditingController();
  late String latitude = "0.0";
  late String longitude = "0.0";

  List<File> imagesList = <File>[];
  String _error = 'No Error Detected';
  final _formKey = GlobalKey<FormState>();
  bool _isLoading = false;
  void addImages() async {
    final pickedImage =
        await ImagePicker().pickImage(source: ImageSource.camera);

    if (pickedImage == null) {
      return;
    }

    setState(() {
      pickedImageFile = File(pickedImage.path);
      // images = pickedImageFile;
      images.add(pickedImageFile);
    });
  }

  Future<Position?> _getCurrentLocation() async {
    bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      throw Exception("Service not enabled");
    }

    LocationPermission permission = await Geolocator.checkPermission();

    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        throw Exception("Location permissoion permanently");
      }
      if (permission == LocationPermission.deniedForever) {
        throw Exception("Location permissoion permanently denied");
      }

      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
      );
      setState(() {
        // latitude = "${position.latitude}";
        // longitude = "${position.longitude}";
        latitude = position.latitude.toStringAsFixed(2);
        longitude = position.longitude.toStringAsFixed(2);
      });
    }
    if (permission == LocationPermission.whileInUse) {
      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
      );
      setState(() {
        // latitude = "${position.latitude}";
        // longitude = "${position.longitude}";
        latitude = position.latitude.toStringAsFixed(2);
        longitude = position.longitude.toStringAsFixed(2);
      });
    }
    List<Placemark> placemarks = await placemarkFromCoordinates(
        double.parse(latitude), double.parse(longitude));
    print(latitude);
    print(longitude);
    print(placemarks.last.locality);
  }

  void getLocation() {
    _getCurrentLocation();
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    images.clear();
    detailsController.dispose();
    contactController.dispose();
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getLocation();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SafeArea(
          child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 5,
              ),
              IconButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  icon: const Icon(Icons.arrow_back_ios_new_rounded)),
              SizedBox(
                height: 15,
              ),
              Center(
                child: const Text(
                  "Details",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              images.isNotEmpty
                  ? Container(
                      padding: EdgeInsets.only(bottom: 15),
                      child: CarouselSlider(
                          items: images.map((e) {
                            return Builder(
                                builder: ((BuildContext context) => Image.file(
                                      e,
                                      fit: BoxFit.cover,
                                      height: 200,
                                    )));
                          }).toList(),
                          options: CarouselOptions(
                            viewportFraction: 1,
                            height: 210,
                          )),
                    )
                  : const SizedBox(
                      height: 1,
                    ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.black12, width: 2),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Center(
                    child: TextFormField(
                      validator: (value) {
                        if (value!.isEmpty) {
                          return 'Please enter a disaster type';
                        }
                        return null;
                      },
                      cursorColor: const Color.fromARGB(31, 78, 77, 77),
                      controller: detailsController,
                      decoration: const InputDecoration(
                          enabledBorder: InputBorder.none,
                          focusedBorder: InputBorder.none,
                          hintText: "Disaster Details"),
                      maxLines: 3,
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 2,
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.black12, width: 2),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Center(
                    child: TextFormField(
                      validator: (value) {
                        if (value!.isEmpty) {
                          return 'Please enter a name';
                        }
                        return null;
                      },
                      cursorColor: const Color.fromARGB(31, 78, 77, 77),
                      controller: contactController,
                      decoration: const InputDecoration(
                          enabledBorder: InputBorder.none,
                          focusedBorder: InputBorder.none,
                          hintText: "Contact Details"),
                      maxLines: 1,
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              if (images.isEmpty)
                const Center(
                  child: Text(
                    "Add Photos ",
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              const SizedBox(
                height: 20,
              ),
              if (images.isEmpty)
                Center(
                  child: CircleAvatar(
                    radius: 30,
                    backgroundColor: const Color.fromARGB(255, 50, 52, 65),
                    child: IconButton(
                        onPressed: addImages, icon: const Icon(Icons.add)),
                  ),
                ),
              // const Spacer(),
              const SizedBox(
                height: 50,
              ),
              _isLoading
                  ? const Center(child: CircularProgressIndicator())
                  : Center(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: SizedBox(
                            height: 45,
                            width: double.infinity,
                            child: ElevatedButton(
                              onPressed: () {
                                print(widget.disasterType);
                                final now = new DateTime.now();
                                String time =
                                    DateFormat('HH:mm:ss').format(now);
                                String date = DateFormat('d/M/y')
                                    .format(now); // 28/03/2020
                                setState(() {
                                  _isLoading = true;
                                });
                                uploadReport(
                                    context: context,
                                    imageFile: images[0],
                                    name: "name",
                                    dtype: widget.disasterType,
                                    description: detailsController.text,
                                    contact: contactController.text,
                                    lat: latitude,
                                    long: longitude,
                                    date: date,
                                    time: time,
                                    status: "Ongoing");
                                Timer.periodic(Duration(seconds: 2), (_) {
                                  setState(() {
                                    _isLoading = false;
                                  });
                                  Navigator.pop(context);
                                });
                                // Time
                              },
                              style: ElevatedButton.styleFrom(
                                  backgroundColor:
                                      const Color.fromARGB(255, 50, 52, 65)),
                              child: const Text("Report"),
                            )),
                      ),
                    )
            ],
          ),
        ),
      )),
    );
  }
}
