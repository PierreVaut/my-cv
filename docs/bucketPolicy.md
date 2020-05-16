# Bucket policy

Grants public read access.


```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::randomwebsite.xyz/*"
        },
        {
            "Effect":"Allow",
            "Principal": {"AWS": ["arn:aws:iam::XXXXXXXXXXXXXXX:user/cv-pierrevautherin-webapp"]},
            "Action":[
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:GetObjectAcl",
                "s3:DeleteObject"
             ],
            "Resource": "arn:aws:s3:::randomwebsite.xyz/*"
        }
    ]
}

```


[https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteAccessPermissionsReqd.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteAccessPermissionsReqd.html)