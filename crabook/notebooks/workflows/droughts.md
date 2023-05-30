# INFORM Risk assessment framework

## Hazard and vulnerability indicators 

### Hazard

Risk is assessed as the combination between hazard (Drought Hazard Index, DHI) and vulnerability (Drought Vulnerability Index, DVI). In order to avoid artificial weighting assignments in the input factors, a non-compensatory approach is used for the production of the standardized index map for flood risk. Initially all input factors have been standardized in a range of 0 to 1. The risk is then calculateds as  

$R = DHI * DVI$ 

Hazard: The DHI is calculated as function of the Standardized Precipitation Index (SPI). In particular, a drought event is classified in different category based on the SPI value as  

```{figure} ../../images/image10.png
---
name: Drought categories and probability of occurance
align: center
---
Drought categories and probability of occurance
```

The DHI is the assessed as $({MD_r}*{MD_w}) + ({SD_r}*{SD_w}) + ({VSD_r}*{VSD_w})$

where: 
- $MD_r$ - ratings assigned to moderate droughts occurrence classes; 
- $MD_w$ - weight given to the theme of moderate drought occurrence theme; 
- $SD_r$ - ratings assigned to severe droughts occurrence classes; 
- $SD_w$ - weight given to the theme of severe drought occurrence theme; 
- $VSD_r$ - ratings assigned to very severe droughts occurrence classes; 
- $VSD_w$ - weight given to the theme of very severe drought occurrence theme 


```{figure} ../../images/image11.png
---
name: Drought severity and ratings
align: center
---
Drought severity and ratings Source ...
```
### Vulnerability

In this workflow, vulnerability is assessed by means of a Drought Vulnerability Index (DVI). The overall DVI is calculated as a mathematical average among the different vulnerability indicators normalized between 0 and 1. Among them we can include: 

- Population density 

- Female to male ratio 

- Poverty level 

- Agricultural occupation 

- Irrigated land 

- Soil water holding capacity 

- Food production 


```{admonition} IMPORTANT
The advantage of this workflow is that DVI can be customized based on the available data. 
```

The normalization is performed as $Z_i = (X_i – X_min)/(X_max – X_min) 

References: 

Shahid, S., & Behrawan, H. (2008). Drought risk assessment in the western part of Bangladesh. Natural hazards, 46, 391-413. 

