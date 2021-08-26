# Lab: Information disclosure in error messages
## Task
This lab's verbose error messages reveal that it is using a vulnerable version of a third-party framework. To solve the lab, obtain and submit the version number of this framework.

## Solution
When click **View details** of a product, there will be a GET request with a `productId` parameter:  

![image](https://user-images.githubusercontent.com/44528004/130926161-0dd55b71-ac4d-47ed-bb44-cee960409086.png)  

Here, we can guess that the application expect the `productId` to be an integer, so what will happen if we provide a string here?  

![image](https://user-images.githubusercontent.com/44528004/130926287-ec0147f6-2605-42a1-a90e-69115a11890d.png)
> Error messages are returned as well as the version of the web back-end technology.  

Submit the version:  

![image](https://user-images.githubusercontent.com/44528004/130926388-16b3ccfa-e82e-44b5-a8bd-171008e6719e.png)

![image](https://user-images.githubusercontent.com/44528004/130926407-26d385fd-4e24-4ace-918b-04e2735810a2.png)
> Solved!
