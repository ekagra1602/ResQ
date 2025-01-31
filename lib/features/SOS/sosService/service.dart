import 'dart:convert';

import 'package:disaster_managment_sih/features/SOS/sosService/disasterModel.dart';
import 'package:disaster_managment_sih/features/home/widgets/snackbar.dart';
import 'package:http/http.dart' as http;
import 'package:http_parser/http_parser.dart';
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

Future<void> uploadReport({
  required context,
  required String name,
  required String description,
  required String contact,
  required String lat,
  required String long,
  required String dtype,
  required String date,
  required String time,
  required String status,
  required File imageFile,
}) async {
  try {
    final url = Uri.parse(
        'https://resq-api.onrender.com/reportPost'); 

    final request = http.MultipartRequest('POST', url);

    request.fields['name'] = name;
    request.fields['dtype'] = dtype;
    request.fields['description'] = description;
    request.fields['contact'] = contact;
    request.fields['lat'] = lat;
    request.fields['long'] = long;
    request.fields['date'] = date;
    request.fields['time'] = time;
    request.fields['status'] = status;

    
    if (imageFile != null) {
      request.files.add(await http.MultipartFile.fromPath(
        'image',
        imageFile.path,
        contentType:
            MediaType('image', 'jpeg'), 
      ));
    }

    final response = await request.send();

    if (response.statusCode == 200) {
      final responseJson = await response.stream.bytesToString();
      showSnackBar(context, '$responseJson');
      print('Response: $responseJson');
    } else {
      showSnackBar(context, ' ${response.statusCode}');
      print('Error: ${response.statusCode}');
    }
  } catch (error) {
    showSnackBar(context, '$error');
    print('Error: $error');
  }
}
