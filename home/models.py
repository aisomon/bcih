
from operator import mod
from django.db import models
from django.utils import timezone

# Create your models here.

class Test(models.Model):
    test_name = models.CharField(max_length=40,blank=True)
    test_description = models.CharField(max_length=40,blank=True)
    test_price = models.FloatField(null=True,default=0)
    test_code = models.FloatField(null=True,default=0)

    def __str__(self):
        return self.test_name

class Patient(models.Model):
    p_name = models.CharField(max_length=40,blank=True)
    p_age = models.FloatField(null=True,default=0)
    p_sex = models.CharField(max_length=20,blank=True)
    p_phone = models.CharField(max_length=20,blank=True)
    p_test_list = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.p_name

class Payment(models.Model):
    patient_id = models.ForeignKey(Patient,on_delete=models.CASCADE)
    invoice_id = models.CharField(blank=True, max_length=10, unique=True)
    amount = models.FloatField()
    payment_method = models.CharField(max_length=20,null=True)
    transaction_note = models.TextField(null=True,blank=True)
    payment_creator = models.EmailField(null=True,help_text="Should be email")#booking creator user email will store there
    payment_status = models.CharField(max_length=10,null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    #for uniq invoice number genaration
    def save(self, *args, **kwargs):
        today = timezone.now()
        today_string = today.strftime('%y%m%d')
        next_invoice_number = '01'
        last_invoice = Payment.objects.filter(invoice_id__startswith=today_string).order_by('invoice_id').last()
        if last_invoice:
            last_invoice_number = int(last_invoice.invoice_id[6:])
            next_invoice_number = '{0:03d}'.format(last_invoice_number + 1)
        self.invoice_id = today_string + next_invoice_number
        super(Payment, self).save(*args, **kwargs)

    def __str__(self):
        return self.invoice_id


